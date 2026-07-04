import { NextResponse } from "next/server";
import { maxMessageLength } from "@/constants/chat";
import { askGroq } from "@/lib/groq";
import { getKnowledgeContext } from "@/lib/knowledge";
import { getFallbackReply, isInScope } from "@/lib/scope";
import { systemPrompt } from "@/prompts/systemPrompt";
import { ApiChatMessage } from "@/types";

type ChatRequest = {
  message?: unknown;
  history?: unknown;
};

function sanitizeMessage(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeHistory(history: unknown): ApiChatMessage[] {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .filter((item): item is ApiChatMessage => {
      if (!item || typeof item !== "object") {
        return false;
      }

      const candidate = item as Partial<ApiChatMessage>;
      return (
        (candidate.role === "user" || candidate.role === "assistant") &&
        typeof candidate.content === "string"
      );
    })
    .slice(-10)
    .map((item) => ({
      role: item.role,
      content: sanitizeMessage(item.content).slice(0, maxMessageLength),
    }));
}

function mapError(error: unknown) {
  if (!(error instanceof Error)) {
    return "Unable to process your request.";
  }

  if (error.message === "MISSING_API_KEY") {
    return "The AI service is temporarily unavailable. Please try again later.";
  }

  if (error.message === "TIMEOUT") {
    return "The request is taking longer than expected. Please try again in a moment.";
  }

  if (error.message === "RATE_LIMIT") {
    return "Too many requests have been received. Please wait a few seconds and try again.";
  }

  return "Unable to connect to the AI service. Please check your internet connection and try again.";
}

export async function POST(request: Request) {
  try {
    let body: ChatRequest;

    try {
      body = (await request.json()) as ChatRequest;
    } catch {
      return NextResponse.json(
        { success: false, error: "Unable to process your request." },
        { status: 400 },
      );
    }

    if (typeof body.message !== "string") {
      return NextResponse.json(
        { success: false, error: "Please enter a question before sending." },
        { status: 400 },
      );
    }

    const message = sanitizeMessage(body.message);

    if (!message) {
      return NextResponse.json(
        { success: false, error: "Please enter a question before sending." },
        { status: 400 },
      );
    }

    if (message.length > maxMessageLength) {
      return NextResponse.json(
        {
          success: false,
          error: "Your message is too long. Please keep it under 500 characters.",
        },
        { status: 400 },
      );
    }

    if (!isInScope(message)) {
      return NextResponse.json({ success: true, reply: getFallbackReply() });
    }

    const history = normalizeHistory(body.history);
    const knowledgeContext = getKnowledgeContext();

    const messages: ApiChatMessage[] = [
      {
        role: "system",
        content: `${systemPrompt}\n\nUNIVERSITY KNOWLEDGE BASE:\n${knowledgeContext}`,
      },
      ...history,
      { role: "user", content: message },
    ];

    const reply = await askGroq(messages);

    return NextResponse.json({ success: true, reply });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: mapError(error) },
      { status: 500 },
    );
  }
}

import { ApiChatMessage } from "@/types";

type GroqChoice = {
  message?: {
    content?: string;
  };
};

type GroqResponse = {
  choices?: GroqChoice[];
};

export async function askGroq(messages: ApiChatMessage[]) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("MISSING_API_KEY");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
        temperature: 0.4,
        max_tokens: 1024,
      }),
      signal: controller.signal,
    });

    if (response.status === 429) {
      throw new Error("RATE_LIMIT");
    }

    if (!response.ok) {
      throw new Error("GROQ_ERROR");
    }

    const data = (await response.json()) as GroqResponse;
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      throw new Error("EMPTY_RESPONSE");
    }

    return reply;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("TIMEOUT");
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

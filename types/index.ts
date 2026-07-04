export type ChatRole = "user" | "assistant";

export type ApiChatRole = ChatRole | "system";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export type ApiChatMessage = {
  role: ApiChatRole;
  content: string;
};

export type ChatResponse =
  | {
      success: true;
      reply: string;
    }
  | {
      success: false;
      error: string;
    };

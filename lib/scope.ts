import { fallbackMessage } from "@/constants/chat";

const supportedKeywords = [
  "admission",
  "hello",
  "hi",
  "hey",
  "help",
  "apply",
  "eligibility",
  "document",
  "fee",
  "semester",
  "tuition",
  "scholarship",
  "financial aid",
  "attendance",
  "exam",
  "paper",
  "result",
  "department",
  "program",
  "course",
  "library",
  "hostel",
  "transport",
  "bus",
  "campus",
  "facility",
  "calendar",
  "student affairs",
  "registrar",
  "office",
  "timing",
  "university",
  "college",
  "class",
  "degree",
  "enrollment",
  "merit",
  "form",
  "id card",
];

const blockedKeywords = [
  "politics",
  "religion",
  "movie",
  "sports",
  "programming",
  "code",
  "medical",
  "legal",
  "financial advice",
  "investment",
  "stock",
  "crypto",
];

export function isInScope(message: string) {
  const normalized = message.toLowerCase();
  const hasSupportedKeyword = supportedKeywords.some((keyword) =>
    normalized.includes(keyword),
  );
  const hasBlockedKeyword = blockedKeywords.some((keyword) =>
    normalized.includes(keyword),
  );

  return hasSupportedKeyword && !hasBlockedKeyword;
}

export function getFallbackReply() {
  return fallbackMessage;
}

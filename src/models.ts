import type { LanguageModel } from "ai";
import { ollama } from "ollama-ai-provider-v2";

export const ollama_model: LanguageModel = ollama(
  "qwen3:4b-instruct-2507-q4_K_M",
);

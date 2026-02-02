import { stepCountIs, ToolLoopAgent } from "ai";
import { ollama_model } from "./models.ts"; 
import tools from "./tools/index.ts";

export const agent = new ToolLoopAgent({
  model: ollama_model,
  // prompt: "现在几点了?",
  stopWhen: stepCountIs(3),
  tools,
}); 
import { stepCountIs, ToolLoopAgent } from "ai";
import { ollama_model } from "./models.ts";
import tools from "./tools/index.ts";

export const agent = new ToolLoopAgent({
  model: ollama_model,
  stopWhen: stepCountIs(10),
  temperature: 0.1,
  tools,
});

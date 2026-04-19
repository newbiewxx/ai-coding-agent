import { stepCountIs, ToolLoopAgent } from "ai";
import { ollama_model } from "./models.ts";
import tools from "./tools/index.ts";
import mcpClient from "./mcp.client.ts";

const mcpTools = await mcpClient.tools();

export const agent = new ToolLoopAgent({
  model: ollama_model,
  stopWhen: stepCountIs(20),
  temperature: 0.1,
  tools: {
    ...mcpTools,
    ...tools,
  },
});

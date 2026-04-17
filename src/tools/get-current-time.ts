import { tool } from "ai";
import z from "zod";
import serviceAgent from "../service/service.agent.ts";

export const getCurrentTimeTool = tool({
  description: "获取当前的时间",
  inputSchema: z.object({}),
  execute: async () => {
    const approval = await serviceAgent.requestTool({
      toolName: "getCurrentTimeTool",
    });

    if (approval) {
      return new Date().toLocaleString();
    } else {
      return "用户拒绝了获取当前时间的请求";
    }
  },
});

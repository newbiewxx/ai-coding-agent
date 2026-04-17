import { writeFile } from "node:fs/promises";
import { tool } from "ai";
import z from "zod";

export const writeFileTool = tool({
  description: "写入文件内容",
  inputSchema: z.object({
    filePath: z.string().describe("要写入的文件路径"),
    content: z.string().describe("要写入的内容"),
    reason: z.string().describe("写入文件的原因"),
  }),
  execute: async ({ filePath, content }) => {
    try {
      await writeFile(filePath, content, "utf-8");
      return `文件内容已成功写入: ${filePath}`;
    } catch (error) {
      return `写入文件失败: ${(error as Error).message}`;
    }
  },
});

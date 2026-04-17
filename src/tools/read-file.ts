import { readFile } from "node:fs/promises";
import { tool } from "ai";
import z from "zod";

export const readFileTool = tool({
  description: "读取文件内容",
  inputSchema: z.object({
    filePath: z.string().describe("要读取的文件路径"),
    reason: z.string().describe("读取文件的原因"),
  }),
  execute: async ({ filePath }) => {
    try {
      const fileContent = await readFile(filePath, "utf-8");
      return `文件内容已成功读取: ${fileContent}`;
    } catch (error) {
      return `读取文件失败: ${(error as Error).message}`;
    }
  },
});

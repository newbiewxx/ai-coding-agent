import { tool } from "ai";
import { globby } from "globby";
import z from "zod";

export const listFileTool = tool({
  description: "列出目录下的文件,支持 glob 模式",
  inputSchema: z.object({
    directoryPath: z.string().describe("要列出文件的目录路径"),
    reason: z.string().describe("列出文件的原因"),
  }),
  execute: async ({ directoryPath }) => {
    // Implementation for listing files in the directory
    try {
      const files = await globby(directoryPath, { gitignore: true });
      return `目录下的文件有: ${files.join(",")}`;
    } catch (error) {
      return `列出文件失败: ${(error as Error).message}`;
    }
  },
});

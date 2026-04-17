import { getCurrentTimeTool } from "./get-current-time.ts";
import { listFileTool } from "./list-file.ts";
import { readFileTool } from "./read-file.ts";
import { writeFileTool } from "./write-file.ts";

export default {
  // 获取当前时间的工具
  getCurrentTimeTool,
  // 读取文件内容的工具
  readFileTool,
  // 写入文件内容的工具
  writeFileTool,
  // 列出目录下的文件的工具
  listFileTool,
};

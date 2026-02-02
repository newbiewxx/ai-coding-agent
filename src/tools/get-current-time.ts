import { tool } from 'ai';
import z from 'zod';

export const getCurrentTimeTool = tool({
  description: '获取当前的时间',
  inputSchema: z.object({}),
  execute: () => {
    return new Date().toLocaleString();
  },
});

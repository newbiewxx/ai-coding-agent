import { agent } from './agent.ts';

// import OpenAI from "openai";
// const client = new OpenAI({
//   baseURL: "http://localhost:11434/v1",
//   apiKey: ""
// });

// const response = await client.responses.create({
//     model: "qwen3:4b-instruct-2507-q4_K_M",
//     input: "Why is the sky blue?",
// });

// console.log(response.output_text);

// const agent = new ToolLoopAgent({
//   model: ollama("qwen3:4b-instruct-2507-q4_K_M"),
//   // prompt: "现在几点了?",
//   stopWhen: stepCountIs(3),
//   tools: {
//     "getCurrentTime": tool({
//       description: "获取当前的时间，返回格式为HH:MM:SS",
//       inputSchema: z.object({}),
//       execute: () => {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         const seconds = now.getSeconds().toString().padStart(2, '0');
//         return `${hours}:${minutes}:${seconds}`;
//       }
//     })
//   }
// });

// console.log(res.text);

const res = await agent.generate({
  prompt: '现在几点了？',
});

console.log(res.text);

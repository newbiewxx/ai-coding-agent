import { render } from "ink";
import { createElement } from "react";
import App from "./ui/app.tsx";

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

// const res = await agent.generate({
//   // prompt: '现在几点了？',
//   // prompt: '请在当前目录下创建一个 test.txt 文件，内容是 "Hello, World!"',
//   // prompt: '请读取一下 package.json 文件 的内容, 并且总结下这个项目是做什么的',
//   prompt: '请列出 src/tools 目录下的所有文件',
// });

// console.log(res.text);

// const history: ModelMessage[] = [];

// const rl = createInterface(process.stdin, process.stdout);

// while (true) {
//   const ask = await rl.question('请输入你的问题: ');

//   if (!ask.trim()) break;

//   history.push({ role: 'user', content: ask });

//   const { response, text } = await agent.generate({
//     // prompt: '请列出 src/tools 目录下的所有文件',
//     messages: history,
//   });

//   // console.log(response.messages[1]?.content);
//   const messages = response.messages || [];

//   const lastMessage = messages[messages.length - 1];

//   if (lastMessage?.role === 'assistant') {
//     process.stdout.write(`agent: \n\n ${text} \n\n`);
//   }

//   history.push(...messages);
// }

// rl.close();

render(createElement(App));

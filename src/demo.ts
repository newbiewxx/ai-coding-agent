import mcpClient from "./mcp.client.ts";


const tools = await mcpClient.tools();
console.log(tools);


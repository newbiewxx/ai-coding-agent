import { createMCPClient } from '@ai-sdk/mcp';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio';
// Or use the AI SDK's stdio transport:
// import { Experimental_StdioMCPTransport as StdioClientTransport } from '@ai-sdk/mcp/mcp-stdio';

const mcpClient = await createMCPClient({
  transport: new StdioClientTransport({
    command: 'uvx',
    "args": ["mcp-server-git"]
  }),
});

export default mcpClient;
import { TextInput } from "@inkjs/ui";
import {
  convertToModelMessages,
  createIdGenerator,
  readUIMessageStream,
  type UIMessage,
} from "ai";
import { Box } from "ink";
import { useReducer } from "react";
import agentService from "../service/service.agent.ts";
import { uiStore } from "./ui.store.ts";

export const UserInput: React.FC = () => {
  const [key, forceUpdate] = useReducer((p) => p + 1, 0);

  const handleSubmit = async (value: string) => {
    forceUpdate();

    try {
      uiStore.isThinking = true;
      const userMessage: UIMessage = {
        id: crypto.randomUUID(),
        role: "user",
        parts: [{ type: "text", text: value }],
      };
      uiStore.messages.push(userMessage);
      const { result, abort } = await agentService.generateStream(
        await convertToModelMessages(uiStore.messages),
      );

      const uiMessageStream = readUIMessageStream({
        stream: result.toUIMessageStream({
          generateMessageId: createIdGenerator({ prefix: "agent", size: 16 }),
        }),
      });

      for await (const uiMessage of uiMessageStream) {
        const idx = uiStore.messages.findIndex((m) => m.id === uiMessage.id);
        if (idx !== -1) {
          uiStore.messages[idx] = uiMessage;
        } else {
          uiStore.messages.push(uiMessage);
        }
      }

      const { totalTokens = 0 } = await result.totalUsage;
      uiStore.totalUsedTokens = totalTokens;
    } finally {
      uiStore.isThinking = false;
    }
  };

  return (
    <Box
      borderStyle={"round"}
      borderColor={"redBright"}
      paddingX={2}
      paddingY={1}
    >
      <TextInput
        key={key}
        placeholder="Ask the agent to do something..."
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

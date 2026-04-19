import { Badge, Spinner } from '@inkjs/ui';
import type { UIMessage } from 'ai';
import { Box, Text } from 'ink';
import { useSnapshot } from 'valtio';
import { Approval } from './approval.tsx';
import { Markdown } from './markdown.tsx';
import { uiStore } from './ui.store.ts';

const UserMessage: React.FC<{ message: UIMessage }> = ({ message }) => {
  return (
    <Box justifyContent="flex-end">
      <Box borderStyle={'round'} gap={2} paddingX={1}>
        <Text>
          {message.parts
            .filter(p => p.type === 'text')
            .map(p => p.text)
            .join('')}
        </Text>
        <Badge color={'redBright'}>ME</Badge>
      </Box>
    </Box>
  );
};

const AgentMessage: React.FC<{ message: UIMessage }> = ({ message }) => {
  const _snap = useSnapshot(uiStore);

  return (
    <Box gap={2} paddingX={1} maxWidth={'80%'}>
      <Badge color={'blueBright'}>AGENT</Badge>
      {/* <Text>{message.parts.filter(p => p.type === 'text').map(p => p.text).join('')}</Text> */}
      <Box flexDirection="column" gap={1}>
        {message.parts
          .map((p, idx) => {
            if (p.type === 'text' && p.text.trim()) {
              const isStreaming = p.state === 'streaming';

              return (
                <Markdown key={idx.toString()} isStreaming={isStreaming}>
                  {p.text}
                </Markdown>
              );
            }

            // 工具调用
            if ('toolCallId' in p) {
              return (
                <Text key={idx.toString()}>
                  <Text backgroundColor={'blue'}>
                    {p.type}({JSON.stringify(p.input || '{}')})
                  </Text>{' '}
                  <Text color={'blueBright'}>{' => '}</Text>
                  <Text color={'blueBright'} dimColor>
                    {typeof p.output === 'string' ? p.output : JSON.stringify(p.output)}
                  </Text>
                </Text>
              );
            }

            return null;
          })
          .filter(Boolean)}
      </Box>
    </Box>
  );
};

const ThinkingMessage: React.FC = () => {
  return (
    <Box gap={2} paddingX={1} maxWidth={'80%'}>
      <Spinner type="dots" label="working..." />
    </Box>
  );
};

export const Messages: React.FC = () => {
  const snap = useSnapshot(uiStore);
  const messages = snap.messages as unknown as UIMessage[];

  return (
    <Box flexDirection="column" flexGrow={1} gap={1}>
      {messages.map(message => {
        if (message.role === 'user') {
          return <UserMessage key={message.id} message={message} />;
        } else if (message.role === 'assistant') {
          return <AgentMessage key={message.id} message={message} />;
        } else {
          return null;
        }
      })}

      <Approval />

      {snap.isThinking && !snap.approval && <ThinkingMessage />}
    </Box>
  );
};


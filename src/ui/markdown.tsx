import dedent from "dedent";
import { Text } from "ink";
import { marked } from "marked";
import { markedTerminal } from "marked-terminal";
import type { PropsWithChildren } from "react";

marked.use(markedTerminal() as any);

export const Markdown: React.FC<
  PropsWithChildren<{ isStreaming: boolean }>
> = ({ children, isStreaming }) => {
  const text = marked.parse(dedent(children as string));
  return <Text dimColor={isStreaming}>{text}</Text>;
};

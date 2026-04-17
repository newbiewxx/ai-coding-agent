import { ProgressBar } from "@inkjs/ui";
import { Box, Text } from "ink";
import Gradient from "ink-gradient";
import { useSnapshot } from "valtio";
import { uiStore } from "./ui.store.ts";

export const Usage: React.FC = () => {
  const snap = useSnapshot(uiStore);

  const percentage = (snap.totalUsedTokens / snap.maxContextWindowTokens) * 100;

  return (
    <Box justifyContent={"space-between"}>
      <Gradient name="passion">
        <Text>1.press 'ctrl+c' to exit | 2.input '/?' to get help</Text>
      </Gradient>

      <Box>
        <Text>
          Total Used Tokens: {snap.totalUsedTokens} | Context Windows:{" "}
          {percentage.toFixed(2)}%
        </Text>
        <Box minWidth={15} marginLeft={1} marginRight={1}>
          <ProgressBar value={percentage} />
        </Box>
      </Box>
    </Box>
  );
};

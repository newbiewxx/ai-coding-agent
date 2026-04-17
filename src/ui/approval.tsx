import { styleText } from "node:util";
import { Alert, ConfirmInput } from "@inkjs/ui";
import { Box, Text } from "ink";
import { useSnapshot } from "valtio";
import { uiStore } from "./ui.store.ts";

export const Approval: React.FC = () => {
  const snap = useSnapshot(uiStore);
  const approval = snap.approval;

  if (!approval) return null;

  return (
    <Box flexDirection="column" gap={1}>
      <Alert
        variant="warning"
        title={styleText("bgYellowBright", approval.toolName)}
      >
        你允许调用这个工具吗?
      </Alert>
      <Text color={"yellowBright"}>
        <ConfirmInput
          submitOnEnter
          onCancel={() => approval.resolve(false)}
          onConfirm={() => approval.resolve(true)}
        />{" "}
        (press 'y' to approve, 'n' to reject)
      </Text>
    </Box>
  );
};

import { Box } from "ink";
import type React from "react";
import { useSyncExternalStore } from "react";
import { useSnapshot } from "valtio";
import { Hero } from "./hero.tsx";
import { Messages } from "./messages.tsx";
import { uiStore } from "./ui.store.ts";
import { Usage } from "./usage.tsx";
import { UserInput } from "./user-input.tsx";

const store = {
  subscribe: (callback: () => void) => {
    process.stdout.on("resize", callback);
    return () => {
      process.stdout.off("resize", callback);
    };
  },
  getHeight: () => process.stdout.rows,
};

const App: React.FC = () => {
  // useInput(() => {});

  // const [terHeight, setTerHeight] = useState(() => process.stdout.rows);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setTerHeight(process.stdout.rows);
  //   };

  //   process.stdout.on('resize', handleResize);

  //   return () => {
  //     process.stdout.off('resize', handleResize);
  //   };
  // }, []);

  const terHeight = useSyncExternalStore(store.subscribe, store.getHeight);

  const snap = useSnapshot(uiStore);

  return (
    <Box flexDirection="column" minHeight={terHeight - 1} gap={1}>
      <Hero />
      <Messages />
      {!snap.approval && <Usage />}
      {!snap.approval && <UserInput />}
    </Box>
  );
};

export default App;

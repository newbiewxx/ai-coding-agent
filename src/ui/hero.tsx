import { Box } from "ink";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";

export const Hero: React.FC = () => {
  return (
    <Box alignSelf="center">
      <Gradient name="passion">
        <BigText text={"AI CODING AGENT"} font="tiny" />
      </Gradient>
    </Box>
  );
};

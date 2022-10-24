// Mantine Ui
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Center } from "@mantine/core";
import { forwardRef } from "react";
import wait from "../../assets/animations/wait.json";

// ----------------------------------------------------------------------

const WaitLoader = forwardRef<HTMLDivElement, any>(
  ({ children, sx, ...others }, ref) => {
    return (
      <Center>
        <Box ref={ref} sx={sx} {...others}>
          <Player
            autoplay
            loop
            src={wait}
            style={
              {
                //   height: "250px",
                //   marginTop: window.innerHeight / 2 - 200,
              }
            }
          />
        </Box>
      </Center>
    );
  }
);

export default WaitLoader;

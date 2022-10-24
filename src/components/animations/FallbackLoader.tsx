// Mantine Ui
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Center } from "@mantine/core";
import { forwardRef } from "react";
import loading from "../../assets/animations/loading.json";

// ----------------------------------------------------------------------

const FallbackLoader = forwardRef<HTMLDivElement, any>(
  ({ children, sx, ...others }, ref) => {
    return (
      <Center>
        <Box ref={ref} sx={sx} {...others}>
          <Player
            autoplay
            src={loading}
            style={{
              height: "250px",
              marginTop: window.innerHeight / 2 - 200,
            }}
          />
        </Box>
      </Center>
    );
  }
);

export default FallbackLoader;

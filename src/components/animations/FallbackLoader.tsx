// Mantine Ui
import { Loader, Center, Box, useMantineColorScheme } from "@mantine/core";
import { forwardRef } from "react";

// ----------------------------------------------------------------------

const FallbackLoader = forwardRef<HTMLDivElement, any>(
  ({ children, sx, ...others }, ref) => {
    const { colorScheme } = useMantineColorScheme();
    return (
      <Center>
        <Box ref={ref} sx={sx} {...others}>
          <Loader
            color={colorScheme === "dark" ? "yellow" : "orange"}
            size={75}
            style={{
              marginTop: window.innerHeight / 2 - 150,
              marginBottom: window.innerHeight / 2 - 50,
              marginLeft: -100,
            }}
          />
        </Box>
      </Center>
    );
  }
);

export default FallbackLoader;

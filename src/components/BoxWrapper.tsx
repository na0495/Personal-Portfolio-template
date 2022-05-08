import { Box } from "@mantine/core";
import { forwardRef } from "react";

// ----------------------------------------------------------------------------

const BoxWrapper = forwardRef<HTMLDivElement, any>(
  ({ children, align, withBackground, ...props }, ref) => {
    return (
      <Box
        sx={(theme) => ({
          textAlign: align,
          padding: theme.spacing.xl * 2,
          borderRadius: theme.radius.md,
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.xl,
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
          boxShadow: `${theme.shadows.md} !important`,
          backgroundColor: withBackground
            ? theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
            : theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.white[0],
        })}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default BoxWrapper;

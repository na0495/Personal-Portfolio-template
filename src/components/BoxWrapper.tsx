import { Box } from "@mantine/core";
import { forwardRef } from "react";

// ----------------------------------------------------------------------------

const BoxWrapper = forwardRef<HTMLDivElement, any>(
  ({ children, align, ...props }, ref) => {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.white[0],
          textAlign: align,
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.xl,
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
          boxShadow: `${theme.shadows.md} !important`,
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

import { Box } from "@mantine/core";
import { forwardRef } from "react";

// ----------------------------------------------------------------------------

const BoxWrapper = forwardRef<HTMLDivElement, any>(
  ({ children, align, withBackground, ...props }, ref) => {
    return (
      <Box
        sx={(theme) => ({
          textAlign: align,
          [theme.fn.largerThan("xs")]: {
            padding: theme.spacing.xl,
          },

          borderRadius: theme.radius.md,
          marginTop: theme.spacing.xl,
          marginBottom: theme.spacing.xl,
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
          backgroundColor: withBackground
            ? theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
            : theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.white[0],
          // zIndex: 9999,
          boxShadow: `0 0 10px ${
            theme.colorScheme === "dark"
              ? theme.colors.white[3]
              : theme.colors.white[6]
          } !important`,
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

import { forwardRef, ReactNode } from "react";
// mantine
import { Box } from "@mantine/core";

// ----------------------------------------------------------

interface SectionProps {
  children: ReactNode;
  meta?: ReactNode;
  withBackground?: boolean;
  isFirst?: boolean;
  height?: string;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, meta, height, isFirst, withBackground, ...other }, ref) => (
    <Box
      sx={(theme) => ({
        height: height || "99vh",
        [theme.fn.smallerThan("md")]: {
          marginTop: isFirst ? -20 : 0,
          marginBottom: 150,
        },
        [theme.fn.largerThan("md")]: {
          marginTop: isFirst ? -60 : 0,
          marginBottom: 0,
        },
        marginRight: -16,
        marginLeft: -16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: withBackground
          ? theme.colorScheme === "dark"
            ? theme.colors.yellow[3]
            : theme.colors.orange[3]
          : "transparent",
      })}
    >
      {children}
    </Box>
  )
);

export default Section;

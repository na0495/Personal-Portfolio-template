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
        // set the box size of the higet of size of the window
        height: height || "99vh",
        marginTop: isFirst ? 100 - (theme.breakpoints.sm ? 100 : 0) : 100,
        // if it small screen, sm set margin bottom to 150
        marginBottom: theme.breakpoints.sm ? 200 : 0,
        marginRight: -16,
        marginLeft: -16,
        // senter the children in the box
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // if withBackground is true, set the background  to
        // else set the background to transparent
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

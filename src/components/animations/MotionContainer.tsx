import { Box, BoxProps } from "@mantine/core";
import { m, MotionProps } from "framer-motion";
// @mui
//
import { varContainer } from "./variants";

// ----------------------------------------------------------------------

type IProps = BoxProps & MotionProps;

export interface Props extends IProps {
  animate?: boolean;
  action?: boolean;
  component?: any;
}

export default function MotionContainer({
  animate,
  action = false,
  children,
  component,
  ...other
}: Props) {
  if (action) {
    return (
      <Box
        component={component}
        initial={false}
        animate={animate ? "animate" : "exit"}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={component}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}

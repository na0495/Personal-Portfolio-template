import { forwardRef, ReactNode } from "react";
// mantine
import { Box, Center } from "@mantine/core";
import CustomHelmet from "./CustomHelmet";

// ----------------------------------------------------------

interface PageProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
  withBackground?: boolean;
  isFirst?: boolean;
  height?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  (
    { children, title = "", meta, height, isFirst, withBackground, ...other },
    ref
  ) => (
    <Center ref={ref} mt={100}>
      <CustomHelmet title={title} />
      <Box
        sx={(theme) => ({
          marginRight: -16,
          marginLeft: -16,
          backgroundColor: withBackground
            ? theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.orange[1]
            : "transparent",
        })}
      >
        {children}
      </Box>
    </Center>
  )
);

export default Page;

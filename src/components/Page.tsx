import { forwardRef, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
// mantine
import { Box } from "@mantine/core";

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
    <>
      <Helmet>
        <title>{`${title} | Saad Portfolio`}</title>
        {meta}
      </Helmet>
      <Box
        sx={(theme) => ({
          marginRight: -16,
          marginLeft: -16,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: withBackground
            ? theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.orange[1]
            : "transparent",
        })}
      >
        {children}
      </Box>
    </>
  )
);

export default Page;

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
          // set the box size of the higet of size of the window
          height: height || "99vh",
          marginTop: isFirst ? -100 : 100,
          
          [theme.fn.smallerThan("md") as any]: {
            marginTop: isFirst ? -50 : 50,
          },

          [theme.fn.smallerThan("xs") as any]: {
            marginTop: isFirst ? -25 : 25,
          },


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
    </>
  )
);

export default Page;

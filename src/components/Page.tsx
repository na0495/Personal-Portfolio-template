import { Box } from "@mantine/core";

// ----------------------------------------------------------

type PageProps = {
  children: React.ReactNode;
  withBackground?: boolean;
  isFirst?: boolean;
  height?: string;
  ref?: React.Ref<HTMLDivElement>;
};

export default function Page({
  children,
  withBackground,
  isFirst,
  height,
  ref,
  ...props
}: PageProps) {
  return (
    <Box
      sx={(theme) => ({
        // set the box size of the higet of size of the window
        height: height || "100vh",
        marginTop: isFirst ? -100 : 100,
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
      ref={ref}
    >
      {children}
    </Box>
  );
}

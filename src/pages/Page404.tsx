import { Link } from "react-router-dom";
// mantine
import { Text, Box, createStyles, Image } from "@mantine/core";
// assets
import NotFoundSvg from "src/assets/not_found.svg";

// ----------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  root: {
    marginTop: window.innerHeight / 10,
    //  change the margin top on smaller screens
    "@media (max-width: 600px)": {
      marginTop: window.innerHeight / 3.5 - 50,
    },
    // center the content
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: "2rem",
    // remove the underline
    textDecoration: "none",
    // hover effect
    "&:hover": {
      fontSize: "2.3rem",
      color: theme.colors.green,
    },
    // bold the text
    fontWeight: "bold",
    // text color
    color: theme.colors.gray[8],
  },
}));

export default function Page404() {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Image src={NotFoundSvg} />
      <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        weight={700}
        style={{ fontFamily: "Greycliff CF, sans-serif", fontSize: "3rem" }}
      >
        404 - Page not found
      </Text>
      <Link to="/" className={classes.link}>
        Go to Dashboard
      </Link>
    </Box>
  );
}

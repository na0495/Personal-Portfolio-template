import { createStyles } from "@mantine/core";
import na0495Video from "../assets/na0495.mp4";
import BoxWrapper from "./BoxWrapper";

// ----------------------------------------------------

const useStyles: any = createStyles((theme) => ({
  video: {
    [theme.fn.smallerThan("sm")]: {
      maxWidth: 250,
      maxHeight: 250,
    },
    [theme.fn.largerThan("sm")]: {
      maxWidth: 500,
      maxHeight: 500,
    },
  },
}));

export default function GithubWrapped() {
  const { classes } = useStyles();
  return (
    <BoxWrapper>
      <video controls className={classes.video}>
        <source src={na0495Video} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </BoxWrapper>
  );
}

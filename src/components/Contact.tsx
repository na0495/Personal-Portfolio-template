import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
import BoxWrapper from "./BoxWrapper";
import { ContactIconsList } from "./ContactIcons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    minWidth: 600,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.orange[4]} 0%, ${theme.colors.white[7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },

  description: {
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    // color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[5]
        : theme.colors.orange[1],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[6]
          : theme.colors.orange[4],
    },
  },
}));

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function Contact() {
  const { classes } = useStyles();

  // const icons = social.map((Icon, index) => (
  //   <ActionIcon
  //     key={index}
  //     size={28}
  //     className={classes.social}
  //     variant="transparent"
  //   >
  //     <Icon size={22} />
  //   </ActionIcon>
  // ));

  return (
    <BoxWrapper>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Contact me</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          {/* <Group mt="xl">{icons}</Group> */}
        </div>
        <form className={classes.form} name="contact" method="post">
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </form>
      </SimpleGrid>
    </BoxWrapper>
  );
}

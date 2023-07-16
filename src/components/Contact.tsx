// Mantine
import {
  Button,
  createStyles,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
// components
import BoxWrapper from "./BoxWrapper";
import { ContactIconsList } from "./ContactIcons";
// utils
import emailjs from "emailjs-com";
import { Check } from "tabler-icons-react";
// config
import { serviceId, templateId, userId } from "../config";

// -----------------------------------------------------------

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    minWidth: 600,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.orange[4]} 0%, ${theme.colors.white[7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl,
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
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
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

  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[5]
        : theme.colors.orange[4],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[6]
          : theme.colors.green[4],
    },
  },
}));

export function Contact() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) => (value.length > 0 ? null : "Name is required"),
      message: (value) => (value.length > 0 ? null : "Message is required"),
    },
  });

  const onSubmit = (values: any) => {
    try {
      emailjs.send(serviceId, templateId, values, userId).then((result) => {
        showNotification({
          title: "Success",
          message: "Your message has been sent, ! ! 🤩",
          color: "green",
          icon: <Check />,
        });
        form.reset();
      });
    } catch (error) {
      showNotification({
        title: "Error",
        message: "An error occurred while sending your message",
        color: "red",
      });
    }
  };

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
        </div>
        <form onSubmit={form.onSubmit(onSubmit)} className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            {...form.getInputProps("name")}
          />
          <Textarea
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            {...form.getInputProps("message")}
          />

          <Group position="right" mt="md">
            <Button type="submit" className={classes.control}>
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </BoxWrapper>
  );
}

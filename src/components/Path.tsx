// Mantine
import {
  Container,
  Card,
  Image,
  Avatar,
  Title,
  Text,
  Grid,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// icons
import { Heart } from "tabler-icons-react";
// _mock
import path from "../_mock/path.json";
import { motion } from "framer-motion";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    boxShadow: `${theme.shadows.md} !important`,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  badge: {},
}));

export default function Path() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const features = path.badges.map((badge) => (
    <Badge
      className={classes.badge}
      color={theme.colorScheme === "dark" ? "dark" : "gray"}
      key={badge.label}
    >
      {badge.label}
    </Badge>
  ));
  return (
    <Container px="xl" size="lg">
      <BoxWrapper>
        <Grid>
          <Grid.Col xs={12} md={5}>
            <Card withBorder radius="lg" p="md" className={classes.card}>
              <Card.Section>
                <Image src={path.image} alt={path.title} height={180} />
              </Card.Section>

              <Card.Section className={classes.section} mt="md">
                <Group position="apart">
                  <Text size="lg" weight={500}>
                    {path.title}
                  </Text>
                  <Text size="md">{path.company}</Text>
                </Group>
                <Text size="sm" mt="xs">
                  {path.description}
                </Text>
              </Card.Section>

              <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} color="dimmed">
                  Technologies
                </Text>
                <Group spacing={7} mt={5}>
                  {features}
                </Group>
              </Card.Section>

              <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }}>
                  Show details
                </Button>
                <ActionIcon variant="default" radius="md" size={36}>
                  <Heart size={18} className={classes.like} />
                </ActionIcon>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </BoxWrapper>
    </Container>
  );
}

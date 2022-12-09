import { useEffect, useState } from "react";
// Mantine
import {
  Container,
  Title,
  Text,
  Box,
  Avatar,
  Group,
  createStyles,
  Skeleton,
  Grid,
} from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
import GitHubCalendar from "react-github-calendar";
// d_mock
import github from "../_mock/github.json";
import { GITHUB_USERNAME } from "../config";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

type GithubUser = {
  login: string;
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  html_url: string;
};

export default function Github() {
  const [user, setUser] = useState<GithubUser>();
  const { classes } = useStyles();
  const [loading, setLoading] = useState(true);
  const [totalCommits, setTotalCommits] = useState(0);

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const data = await res.json();
    setUser(data);
    setLoading(false);
  };

  const fetchTotalCommits = async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`
    );
    const data: { total: Object } = await res.json();
    let total = Object.values(data.total).reduce((a: any, b: any) => a + b, 0);
    setTotalCommits(total);
  };

  useEffect(() => {
    setLoading(true);
    fetchTotalCommits();
    fetchData();
  }, []);

  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
        <Title
          order={3}
          sx={(theme) => ({
            marginBottom: 25,
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[5]
                : theme.colors.orange[5],
          })}
        >
          {github.title}
        </Title>
        <Box
          component="a"
          href={user?.html_url}
          target="_blank"
          mb={25}
          sx={(theme) => ({
            display: "block",
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
            }`,
            boxShadow: `${theme.shadows.md} !important`,
            textDecoration: "none",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          {loading ? (
            <>
              <Grid>
                <Grid.Col span={2}>
                  <Skeleton height={100} circle mb="xl" />
                </Grid.Col>
                <Grid.Col span={10}>
                  <Skeleton height={20} mt={15} radius="xl" />
                  <Skeleton height={20} mt={10} radius="xl" />
                  <Skeleton height={20} mt={10} radius="xl" width="70%" />
                </Grid.Col>
              </Grid>
            </>
          ) : (
            <Group noWrap>
              <div>
                <Avatar src={user?.avatar_url} size={125} radius="md" />
                <Text mt={10} mb={-10} ml={15}>
                  {user?.followers} followers
                </Text>
              </div>
              <div>
                <Text size="lg" weight={700} className={classes.name}>
                  {user?.login}
                </Text>
                <Group noWrap spacing={10} mt={3}>
                  <Text size="md" className="text">
                    {user?.bio} <br /> My account curently has {totalCommits}{" "}
                    commits.
                  </Text>
                </Group>
              </div>
            </Group>
          )}
        </Box>
        <Title
          order={3}
          sx={(theme) => ({
            marginBottom: 25,
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[5]
                : theme.colors.orange[5],
          })}
        >
          {github.contribution}
        </Title>
        <BoxWrapper withBackground={true}>
          <GitHubCalendar username="Egon001" />
        </BoxWrapper>
      </BoxWrapper>
    </Container>
  );
}

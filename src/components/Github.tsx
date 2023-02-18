import { useEffect, useState } from "react";
// Mantine
import {
  Avatar,
  Box,
  Center,
  Container,
  createStyles,
  Grid,
  Group,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
// Components
import GitHubCalendar from "react-github-calendar";
import BoxWrapper from "./BoxWrapper";
// _mock & config
import { GITHUB_USERNAME } from "../config";
import github from "../_mock/github.json";

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
  const matches = useMediaQuery("(min-width: 630px)");

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
          order={1}
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
            textDecoration: "none",
            boxShadow: `0 0 10px ${
              theme.colorScheme === "dark"
                ? theme.colors.white[3]
                : theme.colors.white[6]
            } !important`,

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
          ) : matches ? (
            <Group noWrap>
              <Box>
                <Avatar
                  src={user?.avatar_url}
                  size={125}
                  radius="md"
                  alt="Github Avatar"
                />
                <Text mt={10} mb={-10} ml={15}>
                  {user?.followers} followers
                </Text>
              </Box>
              <Box>
                <Text size="lg" weight={700} className={classes.name}>
                  {user?.login}
                </Text>
                <Group noWrap spacing={10} mt={3}>
                  <Text size="md" className="text">
                    {user?.bio} <br /> My account curently has {totalCommits}{" "}
                    commits.
                  </Text>
                </Group>
              </Box>
            </Group>
          ) : (
            <>
              <Center>
                <div>
                  <Avatar src={user?.avatar_url} size={125} radius="md" />
                  <Text mt={10} mb={-10} ml={15}>
                    {user?.followers} followers
                  </Text>
                </div>
              </Center>
              <Box mt={25}>
                <Text size="lg" weight={700} className={classes.name}>
                  {user?.login}
                </Text>
                <Group noWrap spacing={10} mt={3}>
                  <Text size="md" className="text">
                    {user?.bio} <br /> My account curently has {totalCommits}{" "}
                    commits.
                  </Text>
                </Group>
              </Box>
            </>
          )}
        </Box>
        <Title
          order={1}
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
          <GitHubCalendar
            username={GITHUB_USERNAME}
            blockSize={matches ? 15 : 5}
            fontSize={matches ? 14 : 7}
          />
        </BoxWrapper>
      </BoxWrapper>
    </Container>
  );
}

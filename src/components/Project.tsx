import { useEffect, useState } from "react";
// Mantine
import { Container, Grid, Skeleton, Title } from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// d_mock
import github from "../_mock/github.json";
import RepositoryCard from "./RepositoryCard";

// ----------------------------------------------------------------------------

export default function Github() {
  const [repos, setRepos] = useState<any>([]);

  const fetchData = async () => {
    const res = await fetch("https://api.github.com/users/na0495/repos");
    const data = await res.json();
    setRepos(
      data
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 9)
    );
  };

  useEffect(() => {
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
          {github.project}
        </Title>
        <Grid>
          {repos.length > 0
            ? repos.slice(0, 6).map((repo: any, index: number) => (
                <Grid.Col sm={12} md={6} lg={4} key={index}>
                  <RepositoryCard
                    title={repo.name}
                    description={repo.description}
                    language={repo.language}
                    url={repo.svn_url}
                    created_at={repo.created_at}
                    stargazers_count={repo.stargazers_count}
                    forks_count={repo.forks_count}
                  />
                </Grid.Col>
              ))
            : Array.from(Array(6)).map((_, index) => (
                <Grid.Col sm={12} md={6} lg={4} key={index}>
                  <Skeleton height={150} sx={{ minWidth: 175 }} radius="xl" />
                </Grid.Col>
              ))}
        </Grid>
      </BoxWrapper>
    </Container>
  );
}

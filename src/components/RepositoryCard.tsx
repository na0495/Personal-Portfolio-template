import {
  Box,
  Group,
  Text,
  Badge,
  Stack,
  Spoiler,
  TypographyStylesProvider,
} from "@mantine/core";
import { motion } from "framer-motion";
import { BrandGithub, GitFork, Star } from "tabler-icons-react";
import { getTagColor } from "../utils/getTagColor";
import BoxWrapper from "./BoxWrapper";

// ------------------------------------------------------

const RepositoryCard = (props: any) => {
  const { title, description, language, url, stargazers_count, forks_count } =
    props;

  const handleLinkClick = (e: any, link: any) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.md,
          height: 175,
          borderRadius: 20,
          marginTop: theme.spacing.md,
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[3]
          }`,
          boxShadow: `${theme.shadows.md} !important`,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.white[0],
        })}
      >
        <Group>
          <Group>
            {/* <Tooltip> */}
            <Group>
              <BrandGithub />
              <Text size="md">{title}</Text>
            </Group>
            <Group position="apart">
              <Group>
                {forks_count && (
                  <Box>
                    <GitFork size={18} />
                    {forks_count}
                  </Box>
                )}
                <Box>
                  <Star size={18} />
                  {stargazers_count}
                </Box>
              </Group>
              {language && (
                <Badge color={getTagColor(language)} size="sm">
                  <Text>{language}</Text>
                </Badge>
              )}
            </Group>
          </Group>
          <Text lineClamp={2}>
            <TypographyStylesProvider>
              {/* <h3>Line clamp with TypographyStylesProvider</h3> */}
              <Text size="xs">{description}</Text>
            </TypographyStylesProvider>
          </Text>
        </Group>
      </Box>
    </motion.div>
  );
};

export default RepositoryCard;

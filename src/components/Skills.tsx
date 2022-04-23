// Mantine
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// motion
import { motion } from "framer-motion";
// mock
import tech from "../_mock/tech.json";

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  title: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.orange[4],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: theme.fontSizes.lg,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },
}));

export default function Skills() {
  const { classes } = useStyles();
  return (
    <Container px="xl" size="lg">
      <BoxWrapper>
        {tech.map((item: any, index: number) => (
          <div key={index}>
            <Title
              order={3}
              sx={(theme) => ({
                marginBottom: 10,
                marginTop: 10,
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.yellow[5]
                    : theme.colors.orange[5],
              })}
            >
              {item.title}
            </Title>
            <Text>{item.description}</Text>
            {item.data.map((dataItem: any, index: number) => (
              <div key={index}>
                <Text className={classes.title}>{dataItem.type}</Text>
                <SimpleGrid cols={12}>
                  {dataItem.png.map((subDataitem: any) => (
                    <motion.img
                      key={subDataitem}
                      style={{
                        width: 65,
                        height: 65,
                        borderRadius: 15,
                      }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                      src={"/src/assets/language/" + subDataitem + ".png"}
                      alt={subDataitem}
                    />
                  ))}
                </SimpleGrid>
              </div>
            ))}
          </div>
        ))}
      </BoxWrapper>
    </Container>
  );
}

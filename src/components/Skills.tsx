// Mantine
import { Container, Title, Text, Grid, SimpleGrid } from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// motion
import { motion } from "framer-motion";
// mock
import tech from "../_mock/tech.json";

// ----------------------------------------------------------------------------

export default function Skills() {
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
            <SimpleGrid cols={6}>
              {item.data.map((sc: any) => (
                <motion.img
                  key={sc}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 15,
                    marginRight: 5,
                  }}
                  whileHover={{ scale: 1.8 }}
                  whileTap={{ scale: 0.8 }}
                  src={"/src/assets/language/" + sc + ".png"}
                  alt={sc}
                />
              ))}
            </SimpleGrid>
          </div>
        ))}
      </BoxWrapper>
    </Container>
  );
}

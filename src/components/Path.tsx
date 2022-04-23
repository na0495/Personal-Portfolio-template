// Mantine
import { Container, Title, Text, Grid, SimpleGrid } from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";


// ----------------------------------------------------------------------------

export default function Path() {
  return (
    <Container px="xl" size="lg">
      <BoxWrapper>
        {/* {tech.map((item: any, index: number) => (
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
          </div>
        ))} */}
      </BoxWrapper>
    </Container>
  );
}

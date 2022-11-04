// Mantine
import { Container, Title, Text } from "@mantine/core";
// Components
import BoxWrapper from "./BoxWrapper";
// d_mock
import { aboutMe } from "../_mock/aboutme";

// ----------------------------------------------------------------------------

export default function About() {
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
          {aboutMe.title}
        </Title>

        {aboutMe.details.map((item: any, index: number) => (
          <div key={index}>
            <Text size="lg" key={item.id} className="text" mt={5}>
              <span style={{ marginRight: 5 }}>{item.icon}</span>
              {item.text}
            </Text>
          </div>
        ))}
      </BoxWrapper>
    </Container>
  );
}

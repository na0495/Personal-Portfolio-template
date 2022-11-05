// Mantine
import { Container, Text, Title } from "@mantine/core";
import { Prism } from "@mantine/prism";
import github from "prism-react-renderer/themes/github";
import vsDark from "prism-react-renderer/themes/vsDark";
// Components
import BoxWrapper from "./BoxWrapper";
// d_mock
import { useMediaQuery } from "@mantine/hooks";
import { aboutMe } from "../_mock/aboutme";

// ----------------------------------------------------------------------------

const aboutMeCode = `import Saad from "@saad/core"

// -----------------------------------------------------------------------------

type Props = {
  name: string;
  age: number;
  location: string;
  email: string;
}

export default function AboutMe(props: Props) {
  return (
    <Saad ${aboutMe.details.map(
      (item: any) =>
        `
      ${item.icon} = {${item.text}}`
    )}
    />
  );
}`;

export default function About() {
  const match = useMediaQuery("(max-width: 1000px)");
  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
        {!match ? (
          <Prism
            noCopy
            language="tsx"
            getPrismTheme={(_theme, colorScheme) =>
              colorScheme === "dark" ? vsDark : github
            }
          >
            {aboutMeCode}
          </Prism>
        ) : (
          <>
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
          </>
        )}
      </BoxWrapper>
    </Container>
  );
}

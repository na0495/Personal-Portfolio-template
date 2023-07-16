import { useState } from "react";
// Mantine
import { Prism } from "@mantine/prism";
import { useMediaQuery } from "@mantine/hooks";
import {
  Container,
  Group,
  Switch,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
//
import github from "prism-react-renderer/themes/github";
import vsDark from "prism-react-renderer/themes/vsDark";
// Components
import BoxWrapper from "./BoxWrapper";
// _mock
import { aboutMe } from "src/_mock/aboutme";
// icons
import { Code, CodeOff } from "tabler-icons-react";

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
  const theme = useMantineTheme();
  const match = useMediaQuery("(max-width: 1000px)");
  const [isTechPersonal, setIsTechPersonal] = useState(true);
  const NonTechContent = () => (
    <>
      {aboutMe.details.map((item: any, index: number) => (
        <div key={index}>
          <Text size="lg" key={item.id} className="text" mt={5}>
            <span style={{ marginRight: 5 }}>{item.icon}</span>
            {item.text}
          </Text>
        </div>
      ))}
    </>
  );

  return (
    <Container px="xl" size="lg">
      <BoxWrapper withBackground={false}>
        <Group position="apart" mb={25}>
          <Title
            order={1}
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.yellow[5]
                  : theme.colors.orange[5],
            })}
          >
            {aboutMe.title}
          </Title>
          {!match && (
            <Switch
              label={isTechPersonal ? "Dev view" : "Non tech view"}
              checked={isTechPersonal}
              onChange={() => setIsTechPersonal(!isTechPersonal)}
              onLabel={
                <Code
                  size={16}
                  strokeWidth={2.5}
                  color={theme.colors.gray[4]}
                />
              }
              offLabel={
                <CodeOff
                  size={16}
                  strokeWidth={2.5}
                  color={theme.colors.yellow[4]}
                />
              }
              color="orange"
              size="lg"
            />
          )}
        </Group>
        {!match ? (
          isTechPersonal ? (
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
            <NonTechContent />
          )
        ) : (
          <NonTechContent />
        )}
      </BoxWrapper>
    </Container>
  );
}

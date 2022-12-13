import React from "react";
import {
  createStyles,
  ThemeIcon,
  Text,
  Group,
  SimpleGrid,
  Box,
  Stack,
} from "@mantine/core";
import { Sun, Phone, MapPin, At, BrandGithub } from "tabler-icons-react";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    // color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors.yellow[4]} 0%, ${theme.colors.yellow[6]} 100%)`
        : "none",
    backgroundColor: "transparent",
  },

  title: {
    // color:
    //   variant === "gradient"
    //     ? theme.colors.gray[6]
    //     : theme.colors[theme.primaryColor][0],
  },

  description: {
    // color: variant === "gradient" ? theme.black : theme.white,
  },
}));

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: "Email", description: "saadmrabet007@gmail.com", icon: At },
  { title: "Github", description: "na0495", icon: BrandGithub },
  { title: "Address", description: "Casablanca, Morocco", icon: MapPin },
  { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: Sun },
];

export function ContactIconsList({
  data = MOCKDATA,
  variant,
}: ContactIconsListProps) {
  const items = data.map((item, index) => (
    <ContactIcon key={index} variant={variant} {...item} />
  ));
  return <Stack>{items}</Stack>;
}

// export function ContactIcons() {
//   return (
//     <SimpleGrid cols={2} breakpoints={[{ maxWidth: 800, cols: 1 }]}>
//       {/* <Box
//         sx={(theme) => ({
//           padding: theme.spacing.xl,
//           borderRadius: theme.radius.md,
//           backgroundColor: theme.white,
//         })}
//       >
//         <ContactIconsList />
//       </Box> */}

//       {/* <Box
//         sx={(theme) => ({
//           padding: theme.spacing.xl,
//           borderRadius: theme.radius.md,
//           backgroundImage: `linear-gradient(135deg, ${
//             theme.colors[theme.primaryColor][6]
//           } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
//         })}
//       >
//         <ContactIconsList />
//       </Box> */}
//     </SimpleGrid>
//   );
// }

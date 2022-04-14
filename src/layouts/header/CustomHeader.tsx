import {
  createStyles,
  Container,
  Group,
  Tabs,
  Burger,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import LanguagePopover from './LanguagePopover';
import SwitchMode from './SwitchMode';

// -------------------------------------------

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderBottom: `1px solid ${theme.colors[theme.primaryColor][6]}`,
    marginBottom: 120,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },


  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },


  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tabControl: {
    fontWeight: 500,
    height: 38,
    color: `${theme.white} !important`,

    '&:hover': {
      backgroundColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5],
    },
  },

  tabControlActive: {
    color: `${theme.colorScheme === 'dark' ? theme.white : theme.black} !important`,
    borderColor: `${theme.colors[theme.primaryColor][6]} !important`,
  },
}));

interface CustomHeaderProps {
  tabs: any[]
}

export function CustomHeader({ tabs }: CustomHeaderProps) {
  const { classes, theme, cx } = useStyles();
  const navigate = useNavigate();
  const [opened, toggleOpened] = useBooleanToggle(false);

//   const onChange = (active: number, tabKey: string) => {
//     navigate(tabKey);
//     console.log('tabKey', tabKey);
//   };

  const items = tabs.map((tab: any) => <Tabs.Tab label={tab.label} key={tab.label} />);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          {/* <MantineLogo variant="white" /> */}
          <SwitchMode />
          <LanguagePopover />
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
            color={theme.white}
          />
        </Group>
      </Container>
      <Container>
        <Tabs
          variant="outline"
        //   onTabChange={onChange}
          classNames={{
            root: classes.tabs,
            tabsListWrapper: classes.tabsList,
            tabControl: classes.tabControl,
            tabActive: classes.tabControlActive,
          }}
        >
          {items}
        </Tabs>
      </Container>
    </div>
  );
}
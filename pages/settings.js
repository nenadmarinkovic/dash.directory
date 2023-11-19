import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Heading, Paragraph } from 'evergreen-ui';
import {
  ContainerWrap,
  MainSection,
  CenteredSection,
  ThemeLayout,
} from '../styles/components/layout';
import { useServices } from '../services/ServicesProvider';
import Footer from '../components/Footer';
import { useThemeColors } from '../styles/theme';

export default function SignupPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useServices();
  const { textColor } = useThemeColors(theme);

  return (
    <>
      <Head>
        <title>Dash Directory | Settings</title>
        <meta name='description' content='Web directory for organized minds' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        isShown={false}
        currentUser={currentUser}
      />

      <ThemeLayout>
        <MainSection>
          <ContainerWrap>
            <CenteredSection>
              <Heading
                is='h1'
                align='center'
                marginTop={8}
                lineHeight={1.25}
                fontSize={58}
                marginBottom={8}
                fontWeight={900}
                color={textColor}
                letterSpacing='-.003rem'
              >
                Settings
              </Heading>
              <Paragraph
                size={500}
                lineHeight={1.75}
                textAlign='center'
                marginTop={30}
                color='muted'
              >
                In development mode.
              </Paragraph>
            </CenteredSection>
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

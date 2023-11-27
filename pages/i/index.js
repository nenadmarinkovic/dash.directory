import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import {
  ContainerWrap,
  MainSection,
  CenteredSection,
  CenteredLayout,
  ThemeLayout,
} from '../../styles/components/layout';
import Footer from '../../components/Footer';
import { useServices } from '../../services/ServicesProvider';
import { StartWrap, StartHeader } from '../../styles/pages/start';
import { Heading, Strong, StatusIndicator, Button, Paragraph, Text } from 'evergreen-ui';
import Link from 'next/link';
import StartMenu from '../../components/StartMenu';
import DateTimeComponent from '../../components/DateTime';
import { useThemeColors } from '../../styles/theme';
import { isUserEmailVerified, isUserRegisteredWithGitHub } from '../../services/ServicesHelpers';

export default function StartPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useServices();
  const { textColor } = useThemeColors(theme);

  const userIsRegisteredWithGitHub = isUserRegisteredWithGitHub(currentUser);
  const userEmailVerified = isUserEmailVerified(currentUser);

  return (
    <>
      <Head>
        <title>Dash Directory | Start page</title>
        <meta name='description' content='Web directory for organized minds' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        showHeaderLink={true}
        currentUser={currentUser}
      />
      <ThemeLayout>
        <MainSection>
          <ContainerWrap>
            {!currentUser && (
              <>
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
                    Authentication Required
                  </Heading>
                  <Paragraph
                    size={500}
                    lineHeight={1.75}
                    textAlign='center'
                    marginTop={30}
                    color='muted'
                  >
                    It seems like you`re trying to access a restricted area, and you haven`t been
                    authenticated yet. This could be because you`re not logged in or don`t have the
                    necessary permissions to view Dashboard page.
                  </Paragraph>
                </CenteredSection>
                <CenteredLayout>
                  <Link href='/signup'>
                    <Button
                      className='custom-button-big'
                      appearance='primary'
                      fontWeight='bold'
                      width={280}
                      height={50}
                    >
                      <Text fontWeight='bold' color='#FFF'>
                        Create account
                      </Text>
                    </Button>
                  </Link>
                </CenteredLayout>
              </>
            )}

            {currentUser && (userEmailVerified || userIsRegisteredWithGitHub) && (
              <StartWrap>
                {(!userIsRegisteredWithGitHub && !currentUser?.emailVerified) ||
                !currentUser?.displayName ? (
                  <StatusIndicator color='warning'>
                    <Text color={textColor} fontSize={14}>
                      Welcome
                      <Strong color={textColor} fontSize={14}>
                        {currentUser?.displayName && `, ${currentUser?.displayName}`}
                      </Strong>
                      .
                      <br />
                      Please verify your email in order to fully use Dash Directory.
                    </Text>
                  </StatusIndicator>
                ) : (
                  <>
                    <StartHeader>
                      <StatusIndicator color='success'>
                        <Text color={textColor} fontSize={14}>
                          Welcome
                          <Strong color={textColor} fontSize={14}>
                            {currentUser?.displayName && `, ${currentUser?.displayName}`}
                          </Strong>
                          . <br /> Your Start page is still in developer-mode. Thanks for being
                          patient.
                        </Text>
                      </StatusIndicator>
                      <DateTimeComponent />
                    </StartHeader>

                    <StartMenu theme={theme} />
                  </>
                )}
              </StartWrap>
            )}
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

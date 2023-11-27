import { useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import {
  ContainerWrap,
  MainSection,
  PageContainer,
  PageLayout,
  ThemeLayout,
  PageMain,
  CenteredSection,
  CenteredLayout,
} from '../../styles/components/layout';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { useServices } from '../../services/ServicesProvider';
import Sidebar from '../../components/Sidebar';
import { Text, Strong, Button, StatusIndicator, Heading, Paragraph } from 'evergreen-ui';

import { useThemeColors } from '../../styles/theme';
import { isUserEmailVerified, isUserRegisteredWithGitHub } from '../../services/ServicesHelpers';
import { BookmarksTable } from '../../styles/pages/bookmarks';

export default function EventsPage({ theme, toggleTheme }) {
  const { currentUser } = useServices();
  const [openMenu, setOpenMenu] = useState(false);
  const { textColor, textMuted } = useThemeColors(theme);

  const userIsRegisteredWithGitHub = isUserRegisteredWithGitHub(currentUser);
  const userEmailVerified = isUserEmailVerified(currentUser);

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
              <>
                <StatusIndicator marginTop={22} color='success'>
                  <Text color={textColor} fontSize={14}>
                    Welcome
                    <Strong color={textColor} fontSize={14}>
                      {currentUser?.displayName && `, ${currentUser?.displayName}`}
                    </Strong>
                    . <br /> Dash Directory is still in development-mode. Thanks for being patient.
                  </Text>
                </StatusIndicator>
                <PageLayout>
                  <Sidebar theme={theme} />
                  <PageContainer>
                    <PageMain className='no-margins'>
                      <BookmarksTable>
                        <Heading
                          is='h3'
                          align='start'
                          padding={10}
                          marginTop={8}
                          lineHeight={1.25}
                          fontSize={28}
                          fontWeight={900}
                          color={textColor}
                          letterSpacing='-.003rem'
                        >
                          Settings page - soon
                        </Heading>
                        <Paragraph padding={10} color={textMuted} size={500} lineHeight={1.75}>
                          Currently in development mode.
                        </Paragraph>
                      </BookmarksTable>
                    </PageMain>
                  </PageContainer>
                </PageLayout>
              </>
            )}
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

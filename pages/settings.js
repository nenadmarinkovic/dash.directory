import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import {
  ContainerWrap,
  MainSection,
  PageContainer,
  PageLayout,
  ThemeLayout,
  PageHeader,
  PageMain,
  CenteredSection,
  CenteredLayout,
  InputHeader,
} from '../styles/components/layout';
import Link from 'next/link';
import { SignForm, SignField, SignButtons } from '../styles/components/signin';
import Footer from '../components/Footer';
import { useServices } from '../services/ServicesProvider';
import Sidebar from '../components/Sidebar';
import {
  Pane,
  Text,
  Dialog,
  Strong,
  Button,
  Group,
  TextInput,
  StatusIndicator,
  toaster,
  Heading,
  Paragraph,
} from 'evergreen-ui';
import Select from '../components/Select';

import { useThemeColors } from '../styles/theme';
import { isUserEmailVerified, isUserRegisteredWithGitHub } from '../services/ServicesHelpers';
import { BookmarksTable } from '../styles/pages/bookmarks';

export default function EventsPage({ theme, toggleTheme }) {
  const { addBookmark, editBookmark, currentUser } = useServices();
  const [openMenu, setOpenMenu] = useState(false);
  const [bookmarkTitle, setBookmarkTitle] = useState('');
  const [bookmarkLink, setBookmarkLink] = useState('');
  const [bookmarkDescription, setBookmarkDescription] = useState('');
  const [bookmarkCategory, setBookmarkCategory] = useState('');
  const { textColor, textMuted, background } = useThemeColors(theme);
  const [isDialogShown, setIsNewBookmarkDialogShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [searchQuery, setSearchQuery] = useState('');

  const userIsRegisteredWithGitHub = isUserRegisteredWithGitHub(currentUser);
  const userEmailVerified = isUserEmailVerified(currentUser);

  return (
    <>
      <Head>
        <title>Dash Directory | Bookmarks</title>
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
                    <PageHeader>
                      <Group>
                        <InputHeader>
                          <TextInput
                            background={background}
                            height={30}
                            disabled={isLoading}
                            placeholder='Search by title, description, category...'
                            value={searchQuery}
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              setSelectedCategory('All categories');
                            }}
                          />
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill={background}
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                          </svg>
                        </InputHeader>
                      </Group>

                      <Select
                        options={[...categories]}
                        selectedOption={selectedCategory}
                        onSelect={(option) => {
                          setSearchQuery('');
                          setSelectedCategory(option);
                        }}
                      />
                    </PageHeader>
                    <PageMain>
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
                          Settings page
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

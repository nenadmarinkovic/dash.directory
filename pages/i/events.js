import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
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
} from '../../styles/components/layout';
import Link from 'next/link';
import { SignForm, SignField, SignButtons } from '../../styles/components/signin';
import Footer from '../../components/Footer';
import { useServices } from '../../services/ServicesProvider';
import Sidebar from '../../components/Sidebar';
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
import Select from '../../components/Select';

import { useThemeColors } from '../../styles/theme';
import { isUserEmailVerified, isUserRegisteredWithGitHub } from '../../services/ServicesHelpers';
import { BookmarksTable } from '../../styles/pages/bookmarks';

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

  const handleShowNewBookmarkDialog = () => {
    setIsNewBookmarkDialogShown(true);
  };

  const handleAddBookmark = () => {
    if (!bookmarkTitle || !bookmarkLink || !bookmarkCategory) {
      toaster.danger('Please fill out all fields.');
      return false;
    }

    addBookmark(bookmarkTitle, bookmarkDescription, bookmarkLink, bookmarkCategory);

    setSelectedCategory('All categories');

    setBookmarkTitle('');
    setBookmarkLink('');
    setBookmarkDescription('');
    setBookmarkCategory('');

    return true;
  };

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

                      <Pane>
                        <Dialog
                          containerProps={{ className: 'themed-modal' }}
                          isShown={isDialogShown}
                          title='Add task'
                          onCloseComplete={() => setIsNewBookmarkDialogShown(false)}
                          confirmLabel='Custom Label'
                          hasFooter={false}
                          hasClose={false}
                        >
                          {({ close }) => (
                            <Pane>
                              <SignForm>
                                <SignField>
                                  <Strong color={textMuted}>Title:</Strong>
                                  <TextInput
                                    marginTop={3}
                                    background={background}
                                    fontSize={13}
                                    value={bookmarkTitle}
                                    onChange={(e) => setBookmarkTitle(e.target.value)}
                                    name='text-input-name'
                                    placeholder='GitHub'
                                  />
                                </SignField>
                                <SignField>
                                  <Strong color={textMuted}>Description:</Strong>
                                  <TextInput
                                    marginTop={3}
                                    background={background}
                                    fontSize={13}
                                    value={bookmarkDescription}
                                    onChange={(e) => setBookmarkDescription(e.target.value)}
                                    name='text-input-name'
                                    placeholder='A Git-based platform for software.'
                                  />
                                </SignField>
                                <SignField>
                                  <Strong color={textMuted}>Link:</Strong>
                                  <TextInput
                                    marginTop={3}
                                    background={background}
                                    fontSize={13}
                                    value={bookmarkLink}
                                    onChange={(e) => setBookmarkLink(e.target.value)}
                                    name='text-input-name'
                                    placeholder='github.com'
                                  />
                                </SignField>
                                <SignField>
                                  <Strong color={textMuted}>Category:</Strong>
                                  <TextInput
                                    marginTop={3}
                                    background={background}
                                    fontSize={13}
                                    value={bookmarkCategory}
                                    onChange={(e) => setBookmarkCategory(e.target.value)}
                                    name='text-input-name'
                                    placeholder='Development'
                                  />
                                </SignField>
                              </SignForm>
                              <SignButtons>
                                <Button className='button-cancel' onClick={() => close()}>
                                  Cancel
                                </Button>

                                <Button
                                  className='button-add'
                                  appearance='primary'
                                  onClick={() => handleAddBookmark() && close()}
                                >
                                  Add Task
                                </Button>
                              </SignButtons>
                            </Pane>
                          )}
                        </Dialog>

                        <Button
                          className='custom-button-small'
                          fontWeight='bold'
                          onClick={handleShowNewBookmarkDialog}
                        >
                          <span>Add task</span>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 6v12m6-6H6'
                              />
                            </svg>
                          </span>
                        </Button>
                      </Pane>
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
                          Events page
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

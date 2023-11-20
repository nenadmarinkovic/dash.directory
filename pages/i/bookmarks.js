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
  Table,
  TextInput,
  StatusIndicator,
  toaster,
  Heading,
  Paragraph,
  Tooltip,
} from 'evergreen-ui';
import Select from '../../components/Select';
import Dropdown from '../../components/Dropdown';
import { BookmarksTable } from '../../styles/pages/bookmarks';
import { useThemeColors } from '../../styles/theme';
import { isUserEmailVerified, isUserRegisteredWithGitHub } from '../../services/ServicesHelpers';

export default function BookmarksPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { addBookmark, deleteBookmark, editBookmark, currentUser } = useServices();
  const [bookmarkTitle, setBookmarkTitle] = useState('');
  const [bookmarkLink, setBookmarkLink] = useState('');
  const [bookmarkDescription, setBookmarkDescription] = useState('');
  const [bookmarkCategory, setBookmarkCategory] = useState('');
  const { textColor, textMuted, background } = useThemeColors(theme);
  const [isDialogShown, setIsDialogShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditBookmarkShown, setIsEditBookmarkShown] = useState({});
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const userIsRegisteredWithGitHub = isUserRegisteredWithGitHub(currentUser);
  const userEmailVerified = isUserEmailVerified(currentUser);

  const handleToggleDropdown = (id) => {
    setOpenDropdownId(id === openDropdownId ? null : id);
  };

  const [updatedBookmark, setUpdatedBookmark] = useState({
    title: '',
    description: '',
    link: '',
    category: '',
  });

  const handleSaveEditedBookmarkClick = (bookmark) => {
    if (
      !updatedBookmark.title.trim() ||
      !updatedBookmark.description.trim() ||
      !updatedBookmark.link.trim() ||
      !updatedBookmark.category.trim()
    ) {
      toaster.danger('Please fill out all fields.');
      return;
    }

    handleEditBookmarkSubmit(bookmark);
    setIsEditBookmarkShown((prev) => ({
      ...prev,
      [bookmark.id]: false,
    }));
  };

  const handleEditBookmarkSubmit = useCallback(
    async (bookmark) => {
      try {
        await editBookmark(bookmark.id, updatedBookmark);
        toaster.success('Bookmark updated successfully');
      } catch (error) {
        console.error('Error updating bookmark:', error);
        toaster.danger('Error updating bookmark. Please try again.');
      }
    },
    [editBookmark, updatedBookmark],
  );

  const handleShowDialog = () => {
    setIsDialogShown(true);
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

  const handleDeleteBookmark = async (bookmarkId) => {
    try {
      await deleteBookmark(bookmarkId);
      setSelectedCategory('All categories');
      setSearchQuery('');
    } catch (error) {}
  };

  useEffect(() => {
    if (currentUser && currentUser.bookmarks) {
      const uniqueCategories = Array.from(
        new Set(currentUser.bookmarks.map((bookmark) => bookmark.category)),
      );

      setCategories(['All categories', ...uniqueCategories]);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.bookmarks) {
      setIsLoading(true);
      if (selectedCategory === 'All categories') {
        const filtered = currentUser.bookmarks.filter(
          (bookmark) =>
            bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bookmark.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bookmark.category.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setFilteredBookmarks(filtered);
      } else {
        const filtered = currentUser.bookmarks.filter(
          (bookmark) =>
            bookmark.category === selectedCategory &&
            (bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              bookmark.description.toLowerCase().includes(searchQuery.toLowerCase())),
        );
        setFilteredBookmarks(filtered);
      }

      setIsLoading(false);
    }
  }, [currentUser, selectedCategory, searchQuery]);

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
                          title='Add bookmark'
                          onCloseComplete={() => setIsDialogShown(false)}
                          confirmLabel='Custom Label'
                          hasFooter={false}
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
                                <Button onClick={() => close()}>Cancel</Button>

                                <Button
                                  appearance='primary'
                                  onClick={() => handleAddBookmark() && close()}
                                >
                                  Add Bookmark
                                </Button>
                              </SignButtons>
                            </Pane>
                          )}
                        </Dialog>

                        <Button
                          className='custom-button-small'
                          fontWeight='bold'
                          onClick={handleShowDialog}
                        >
                          <span>Add bookmark</span>

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
                      <BookmarksTable className='custom-table'>
                        <Table className='custom-table_wrap'>
                          <Table.Head
                            className={`custom-table_head ${
                              filteredBookmarks.length > 10 && 'add-right-padding'
                            }`}
                            background={background}
                          >
                            <Table.TextHeaderCell className='custom-table_cell'>
                              Title
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell className='custom-table_cell'>
                              Description
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell className='custom-table_cell'>
                              Link
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell className='custom-table_cell'>
                              Category
                            </Table.TextHeaderCell>
                          </Table.Head>
                          <Table.Body className='custom-table_body'>
                            {currentUser?.bookmarks &&
                              (filteredBookmarks.length < 1 ? (
                                <Table.Row
                                  className='custom-table_row'
                                  background={background}
                                  color={textMuted}
                                  key='no-bookmarks'
                                  isSelectable={false}
                                >
                                  <Table.TextCell className='custom-table_cell' textAlign='center'>
                                    <Text color={textColor} fontSize={14}>
                                      No bookmarks found.
                                    </Text>
                                  </Table.TextCell>
                                </Table.Row>
                              ) : (
                                filteredBookmarks.map((bookmark) => (
                                  <Table.Row
                                    className='custom-table_row'
                                    background={background}
                                    color={textMuted}
                                    key={bookmark.id}
                                    isSelectable={false}
                                    onSelect={() => alert(bookmark.title)}
                                  >
                                    <Table.TextCell className='custom-table_cell'>
                                      <Text color={textColor} fontSize={14}>
                                        {bookmark.title}
                                      </Text>
                                    </Table.TextCell>
                                    <Table.TextCell className='custom-table_cell'>
                                      <Tooltip content={bookmark.description} position='top'>
                                        <Text color={textColor} fontSize={14}>
                                          {bookmark.description}
                                        </Text>
                                      </Tooltip>
                                    </Table.TextCell>
                                    <Table.TextCell className='custom-table_cell'>
                                      <Text color={textColor} fontSize={14}>
                                        <a
                                          className='custom-table_link'
                                          href={`https://${bookmark.link}`}
                                          target='_blank'
                                          rel='noreferrer'
                                        >
                                          {bookmark.link}
                                        </a>
                                      </Text>
                                    </Table.TextCell>
                                    <Table.TextCell className='custom-table_cell'>
                                      <Text color={textColor} fontSize={14}>
                                        {bookmark.category}
                                      </Text>
                                    </Table.TextCell>

                                    <span className='custom-table_menu'>
                                      <Dropdown
                                        theme={theme}
                                        isOpen={openDropdownId === bookmark.id}
                                        onToggle={() => handleToggleDropdown(bookmark.id)}
                                      >
                                        <button
                                          onClick={() => {
                                            setUpdatedBookmark({
                                              title: bookmark.title,
                                              description: bookmark.description,
                                              link: bookmark.link,
                                              category: bookmark.category,
                                            });

                                            setIsEditBookmarkShown((prev) => ({
                                              ...prev,
                                              [bookmark.id]: true,
                                            }));
                                          }}
                                        >
                                          Edit
                                        </button>
                                        <button
                                          className='danger'
                                          onClick={() => handleDeleteBookmark(bookmark.id)}
                                        >
                                          Delete
                                        </button>
                                      </Dropdown>

                                      <Pane>
                                        <Dialog
                                          containerProps={{ className: 'themed-modal' }}
                                          isShown={isEditBookmarkShown[bookmark.id]}
                                          title='Edit bookmark'
                                          onCloseComplete={() =>
                                            setIsEditBookmarkShown((prev) => ({
                                              ...prev,
                                              [bookmark.id]: false,
                                            }))
                                          }
                                          hasFooter={false}
                                        >
                                          <Pane>
                                            <SignForm>
                                              <SignField>
                                                <Strong color={textMuted}>Title:</Strong>
                                                <TextInput
                                                  marginTop={3}
                                                  background={background}
                                                  fontSize={13}
                                                  value={updatedBookmark.title}
                                                  onChange={(e) =>
                                                    setUpdatedBookmark((prev) => ({
                                                      ...prev,
                                                      title: e.target.value,
                                                    }))
                                                  }
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
                                                  value={updatedBookmark.description}
                                                  onChange={(e) =>
                                                    setUpdatedBookmark((prev) => ({
                                                      ...prev,
                                                      description: e.target.value,
                                                    }))
                                                  }
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
                                                  value={updatedBookmark.link}
                                                  onChange={(e) =>
                                                    setUpdatedBookmark((prev) => ({
                                                      ...prev,
                                                      link: e.target.value,
                                                    }))
                                                  }
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
                                                  value={updatedBookmark.category}
                                                  onChange={(e) =>
                                                    setUpdatedBookmark((prev) => ({
                                                      ...prev,
                                                      category: e.target.value,
                                                    }))
                                                  }
                                                  name='text-input-name'
                                                  placeholder='Development'
                                                />
                                              </SignField>
                                            </SignForm>
                                            <SignButtons>
                                              <Button
                                                onClick={() =>
                                                  setIsEditBookmarkShown((prev) => ({
                                                    ...prev,
                                                    [bookmark.id]: false,
                                                  }))
                                                }
                                              >
                                                Cancel
                                              </Button>

                                              <Button
                                                appearance='primary'
                                                onClick={() =>
                                                  handleSaveEditedBookmarkClick(bookmark)
                                                }
                                              >
                                                Save
                                              </Button>
                                            </SignButtons>
                                          </Pane>
                                        </Dialog>
                                      </Pane>
                                    </span>
                                  </Table.Row>
                                ))
                              ))}
                          </Table.Body>
                        </Table>
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

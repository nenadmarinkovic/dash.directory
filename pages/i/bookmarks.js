import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Header from "../../components/Header";
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
} from "../../styles/components/layout";
import Link from "next/link";
import {
  SignForm,
  SignField,
  SignButtons,
} from "../../styles/components/signin";
import Footer from "../../components/Footer";
import { useServices } from "../../services/ServicesProvider";
import Sidebar from "../../components/Sidebar";
import {
  Pane,
  Text,
  Dialog,
  Strong,
  Button,
  Group,
  Table,
  TextInput,
  IconButton,
  SearchIcon,
  Spinner,
  SelectMenu,
  StatusIndicator,
  toaster,
  Popover,
  Menu,
  Heading,
  Paragraph,
} from "evergreen-ui";
import { BookmarksTable } from "../../styles/pages/bookmarks";
import { useThemeColors } from "../../styles/theme";
import {
  isUserEmailVerified,
  isUserRegisteredWithGitHub,
} from "../../services/ServicesHelpers";

export default function BookmarksPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { addBookmark, deleteBookmark, currentUser } = useServices();
  const [bookmarkTitle, setBookmarkTitle] = useState("");
  const [bookmarkLink, setBookmarkLink] = useState("");
  const [bookmarkDescription, setBookmarkDescription] = useState("");
  const [bookmarkCategory, setBookmarkCategory] = useState("");
  const { textColor, textMuted, background } = useThemeColors(theme);
  const [isDialogShown, setIsDialogShown] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const userIsRegisteredWithGitHub = isUserRegisteredWithGitHub(currentUser);
  const userEmailVerified = isUserEmailVerified(currentUser);

  useEffect(() => {}, [currentUser]);

  const handleShowDialog = () => {
    setIsDialogShown(true);
  };

  const handleAddBookmark = () => {
    if (!bookmarkTitle || !bookmarkLink || !bookmarkCategory) {
      toaster.danger("Please fill out all fields.");
      return false;
    }

    addBookmark(
      bookmarkTitle,
      bookmarkDescription,
      bookmarkLink,
      bookmarkCategory
    );

    setBookmarkTitle("");
    setBookmarkLink("");
    setBookmarkDescription("");
    setBookmarkCategory("");

    return true;
  };

  const handleDeleteBookmark = async (bookmarkId) => {
    try {
      await deleteBookmark(bookmarkId);
      toaster.notify("Bookmark deleted successfully.");
    } catch (error) {
      toaster.danger("Error deleting bookmark. Please try again.");
    }
  };

  const handleClick = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Dash Directory | Bookmarks</title>
        <meta name="description" content="Web directory for organized minds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                    is="h1"
                    align="center"
                    marginTop={8}
                    lineHeight={1.25}
                    fontSize={58}
                    marginBottom={8}
                    fontWeight={900}
                    color={textColor}
                    letterSpacing="-.003rem"
                  >
                    Authentication Required
                  </Heading>
                  <Paragraph
                    size={500}
                    lineHeight={1.75}
                    textAlign="center"
                    marginTop={30}
                    color="muted"
                  >
                    It seems like you`re trying to access a restricted area, and
                    you haven`t been authenticated yet. This could be because
                    you`re not logged in or don`t have the necessary permissions
                    to view Dashboard page.
                  </Paragraph>
                </CenteredSection>
                <CenteredLayout>
                  <Link href="/signup">
                    <Button
                      className="custom-button-big"
                      appearance="primary"
                      fontWeight="bold"
                      width={280}
                      height={50}
                    >
                      <Text fontWeight="bold" color="#FFF">
                        Create account
                      </Text>
                    </Button>
                  </Link>
                </CenteredLayout>
              </>
            )}

            {currentUser &&
              (userEmailVerified || userIsRegisteredWithGitHub) && (
                <>
                  <StatusIndicator marginTop={22} color="success">
                    <Text color={textColor} fontSize={14}>
                      Welcome
                      <Strong color={textColor} fontSize={14}>
                        {currentUser?.displayName &&
                          `, ${currentUser?.displayName}`}
                      </Strong>
                      . <br /> Dash Directory is still in development-mode.
                      Thanks for being patient.
                    </Text>
                  </StatusIndicator>
                  <PageLayout>
                    <Sidebar theme={theme} />
                    <PageContainer>
                      <PageHeader>
                        <Group>
                          <TextInput
                            background={background}
                            height={30}
                            disabled={isLoading}
                            placeholder="Search by title, description, category..."
                          />
                          <IconButton
                            className="custom-icon-button"
                            background={background}
                            disabled={isLoading}
                            icon={isLoading ? Spinner : SearchIcon}
                            onClick={handleClick}
                          />
                        </Group>
                        <SelectMenu
                          title="Select category"
                          options={["Tools", "Personal", "Development"].map(
                            (label) => ({ label, value: label })
                          )}
                          height={120}
                          fontSize={13}
                          hasFilter={false}
                          hasTitle={false}
                          selected={selected}
                          onSelect={(item) => setSelected(item.value)}
                        >
                          <Button
                            className="category-button"
                            background={background}
                            color={textMuted}
                            fontSize={13}
                          >
                            {"Select category..."}
                          </Button>
                        </SelectMenu>

                        <Pane>
                          <Dialog
                            containerProps={{ className: "themed-modal" }}
                            isShown={isDialogShown}
                            title="Dialog title"
                            onCloseComplete={() => setIsDialogShown(false)}
                            confirmLabel="Custom Label"
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
                                      onChange={(e) =>
                                        setBookmarkTitle(e.target.value)
                                      }
                                      name="text-input-name"
                                      placeholder="Dash Directory"
                                    />
                                  </SignField>
                                  <SignField>
                                    <Strong color={textMuted}>
                                      Description:
                                    </Strong>
                                    <TextInput
                                      marginTop={3}
                                      background={background}
                                      fontSize={13}
                                      value={bookmarkDescription}
                                      onChange={(e) =>
                                        setBookmarkDescription(e.target.value)
                                      }
                                      name="text-input-name"
                                      placeholder="Personal management tool"
                                    />
                                  </SignField>
                                  <SignField>
                                    <Strong color={textMuted}>Link:</Strong>
                                    <TextInput
                                      marginTop={3}
                                      background={background}
                                      fontSize={13}
                                      value={bookmarkLink}
                                      onChange={(e) =>
                                        setBookmarkLink(e.target.value)
                                      }
                                      name="text-input-name"
                                      placeholder="https://dash.directory"
                                    />
                                  </SignField>
                                  <SignField>
                                    <Strong color={textMuted}>Category:</Strong>
                                    <TextInput
                                      marginTop={3}
                                      background={background}
                                      fontSize={13}
                                      value={bookmarkCategory}
                                      onChange={(e) =>
                                        setBookmarkCategory(e.target.value)
                                      }
                                      name="text-input-name"
                                      placeholder="Tools"
                                    />
                                  </SignField>
                                </SignForm>
                                <SignButtons>
                                  <Button onClick={() => close()}>
                                    Cancel
                                  </Button>

                                  <Button
                                    appearance="primary"
                                    onClick={() =>
                                      handleAddBookmark() && close()
                                    }
                                  >
                                    Add Bookmark
                                  </Button>
                                </SignButtons>
                              </Pane>
                            )}
                          </Dialog>

                          <Button
                            className="custom-button-small"
                            fontWeight="bold"
                            onClick={handleShowDialog}
                          >
                            <span>Add</span>

                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v12m6-6H6"
                                />
                              </svg>
                            </span>
                          </Button>
                        </Pane>
                      </PageHeader>
                      <PageMain>
                        <BookmarksTable className="custom-table">
                          <Table className="custom-table_wrap">
                            <Table.Head
                              className="custom-table_head"
                              background={background}
                            >
                              <Table.TextHeaderCell className="custom-table_cell">
                                Title
                              </Table.TextHeaderCell>
                              <Table.TextHeaderCell className="custom-table_cell">
                                Description
                              </Table.TextHeaderCell>
                              <Table.TextHeaderCell className="custom-table_cell">
                                Link
                              </Table.TextHeaderCell>
                              <Table.TextHeaderCell className="custom-table_cell">
                                Category
                              </Table.TextHeaderCell>
                            </Table.Head>
                            <Table.Body
                              className="custom-table_body"
                              height={820}
                            >
                              {currentUser?.bookmarks &&
                                currentUser?.bookmarks.map((bookmark) => (
                                  <Table.Row
                                    className="custom-table_row"
                                    background={background}
                                    color={textMuted}
                                    key={bookmark.id}
                                    isSelectable={false}
                                    onSelect={() => alert(bookmark.title)}
                                  >
                                    <Table.TextCell className="custom-table_cell">
                                      <Text color={textColor} fontSize={14}>
                                        {bookmark.title}
                                      </Text>
                                    </Table.TextCell>
                                    <Table.TextCell className="custom-table_cell">
                                      <Text color={textColor} fontSize={14}>
                                        {bookmark.description}
                                      </Text>
                                    </Table.TextCell>
                                    <Table.TextCell className="custom-table_cell">
                                      <Text color={textColor} fontSize={14}>
                                        {bookmark.link}
                                      </Text>
                                    </Table.TextCell>
                                    <Table.TextCell className="custom-table_cell">
                                      <Text color={textColor} fontSize={14}>
                                        {bookmark.category}
                                      </Text>
                                    </Table.TextCell>

                                    <span className="custom-table_menu">
                                      <Popover
                                        content={
                                          <Menu>
                                            <Menu.Group>
                                              <Menu.Item
                                                onSelect={() =>
                                                  toaster.notify("Edit")
                                                }
                                              >
                                                Edit...
                                              </Menu.Item>
                                            </Menu.Group>
                                            <Menu.Divider />
                                            <Menu.Group>
                                              <Menu.Item
                                                onSelect={() =>
                                                  handleDeleteBookmark(
                                                    bookmark.id
                                                  )
                                                }
                                                intent="danger"
                                              >
                                                Delete...
                                              </Menu.Item>
                                            </Menu.Group>
                                          </Menu>
                                        }
                                      >
                                        <Button
                                          className="custom-table_button"
                                          fontWeight="bold"
                                          onClick={() => setIsDialogShown(true)}
                                        >
                                          <span>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill={background}
                                              viewBox="0 0 24 24"
                                              strokeWidth="1.5"
                                              stroke="currentColor"
                                            >
                                              <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                              />
                                            </svg>
                                          </span>
                                        </Button>
                                      </Popover>
                                    </span>
                                  </Table.Row>
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

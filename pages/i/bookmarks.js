import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import {
  ContainerWrap,
  MainSection,
  PageContainer,
  PageLayout,
  ThemeLayout,
  PageHeader,
  PageMain,
} from "../../styles/components/layout";
import { SignForm, SignField } from "../../styles/components/signin";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/AuthContext";
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
} from "evergreen-ui";
import { BookmarksTable } from "../../styles/pages/bookmarks";

export default function BookmarksPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { addBookmark, currentUser } = useAuth();

  const [bookmarkTitle, setBookmarkTitle] = useState("");
  const [bookmarkLink, setBookmarkLink] = useState("");
  const [bookmarkDescription, setBookmarkDescription] = useState("");
  const [bookmarkCategory, setBookmarkCategory] = useState("");

  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";
  let bw = theme === "light" ? "#FFF" : "#000";

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {}, [currentUser]);

  const handleAddBookmark = () => {
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
  };

  const [selected, setSelected] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
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
            <StatusIndicator marginTop={22} color="success">
              <Text color={textColor} fontSize={14}>
                Welcome
                <Strong color={textColor} fontSize={14}>
                  {currentUser?.displayName && `, ${currentUser?.displayName}`}
                </Strong>
                . <br /> Dash Directory is still in development-mode. Thanks for
                being patient.
              </Text>
            </StatusIndicator>
            <PageLayout>
              <Sidebar theme={theme} />
              <PageContainer>
                <PageHeader>
                  <Group>
                    <TextInput
                      background={bw}
                      disabled={isLoading}
                      placeholder="Search by title, description, category..."
                    />
                    <IconButton
                      background={bw}
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
                    hasFilter={false}
                    hasTitle={false}
                    selected={selected}
                    onSelect={(item) => setSelected(item.value)}
                  >
                    <Button background={bw} color={textMuted}>
                      {"Select category..."}
                    </Button>
                  </SelectMenu>

                  <Pane>
                    <Dialog
                      containerProps={{ className: "themed-modal" }}
                      isShown={isShown}
                      title="Add bookmark"
                      onCloseComplete={() => {
                        handleAddBookmark();
                        setIsShown(false);
                      }}
                      confirmLabel="Add bookmark"
                    >
                      <SignForm>
                        <SignField>
                          <Strong color={textMuted}>Title:</Strong>

                          <TextInput
                            marginTop={3}
                            background={bw}
                            value={bookmarkTitle}
                            onChange={(e) => setBookmarkTitle(e.target.value)}
                            name="text-input-name"
                            placeholder="Dash Directory"
                          />
                        </SignField>
                        <SignField>
                          <Strong color={textMuted}>Description:</Strong>
                          <TextInput
                            marginTop={3}
                            background={bw}
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
                            background={bw}
                            value={bookmarkLink}
                            onChange={(e) => setBookmarkLink(e.target.value)}
                            name="text-input-name"
                            placeholder="https://dash.directory"
                          />
                        </SignField>
                        <SignField>
                          <Strong color={textMuted}>Category:</Strong>
                          <TextInput
                            marginTop={3}
                            background={bw}
                            value={bookmarkCategory}
                            onChange={(e) =>
                              setBookmarkCategory(e.target.value)
                            }
                            name="text-input-name"
                            placeholder="Tools"
                          />
                        </SignField>
                      </SignForm>
                    </Dialog>

                    <Button
                      className="custom-button-small"
                      fontWeight="bold"
                      onClick={() => setIsShown(true)}
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
                      <Table.Head className="custom-table_head" background={bw}>
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
                      <Table.Body height={820}>
                        {currentUser?.bookmarks.map((bookmark) => (
                          <Table.Row
                            className="custom-table_row"
                            background={bw}
                            color={textMuted}
                            key={bookmark.title}
                            isSelectable={false}
                            onSelect={() => alert(bookmark.title)}
                          >
                            <Table.TextCell
                              className="custom-table_cell"
                              color={textMuted}
                            >
                              <Text color={textColor} fontSize={12}>
                                {bookmark.title}
                              </Text>
                            </Table.TextCell>
                            <Table.TextCell className="custom-table_cell">
                              <Text color={textColor} fontSize={12}>
                                {bookmark.description}
                              </Text>
                            </Table.TextCell>
                            <Table.TextCell className="custom-table_cell">
                              <Text color={textColor} fontSize={12}>
                                {bookmark.link}
                              </Text>
                            </Table.TextCell>
                            <Table.TextCell className="custom-table_cell">
                              <Text color={textColor} fontSize={12}>
                                {bookmark.category}
                              </Text>
                            </Table.TextCell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  </BookmarksTable>
                </PageMain>
              </PageContainer>
            </PageLayout>
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

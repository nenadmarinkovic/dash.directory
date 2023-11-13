import { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import {
  ContainerWrap,
  MainSection,
  PageContainer,
  PageLayout,
  ThemeLayout,
  PageHeader,
  GroupOptions,
  PageMain
} from "../../styles/components/layout";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/AuthContext";
// import AddBookmark from "../../components/AddBookmark";
import Sidebar from "../../components/Sidebar";
import { SearchInput, Button, Group } from "evergreen-ui";

export default function StartPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useAuth();

  // TODO: Move this logic
  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let bw = theme === "light" ? "#000" : "#FFF";

  useEffect(() => {}, [currentUser]);

  const options = useMemo(
    () => [
      { label: "Hourly", value: "hourly" },
      { label: "Daily", value: "daily" },
      { label: "Monthly", value: "monthly" },
    ],
    []
  );
  const [selectedValue, setSelectedValue] = useState("daily");

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
            {/* <AddBookmark/> */}
            <PageLayout>
              <Sidebar theme={theme} />
              <PageContainer>
                <PageHeader>
                  <SearchInput placeholder="Filter bookmarks..." />
                  <GroupOptions>
                  <Group>
                    {options.map(({ label, value }) => (
                      <Button
                        key={label}
                        isActive={selectedValue === value}
                        onClick={() => setSelectedValue(value)}
                      >
                        {label}
                      </Button>
                    ))}
                  </Group>
                  </GroupOptions>
                
                  <Button className="themed-button" fontWeight="bold">
                    Add
                  </Button>
                </PageHeader>
                <PageMain>

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

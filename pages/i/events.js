import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import {
  ContainerWrap,
  MainSection,
  PageContainer,
  PageLayout,
  ThemeLayout,
} from "../../styles/components/layout";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/AuthContext";
import AddBookmark from "../../components/AddBookmark";
import Sidebar from "../../components/Sidebar";

export default function StartPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useAuth();

  // TODO: Move this logic
  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let bw = theme === "light" ? "#000" : "#FFF";

  useEffect(() => {}, [currentUser]);

  return (
    <>
      <Head>
        <title>Dash Directory | Events</title>
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
              <Sidebar />
              <PageContainer>MAIN LAYOUT - Tasks</PageContainer>
            </PageLayout>
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

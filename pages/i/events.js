import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import {
  ContainerWrap,
  MainSection,
  PageContainer,
  PageLayout,
  ThemeLayout,
} from "../../styles/components/layout";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../../components/Sidebar";

export default function EventsPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useAuth();

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
            <PageLayout>
              <Sidebar />
              <PageContainer>MAIN LAYOUT - EVENTS</PageContainer>
            </PageLayout>
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

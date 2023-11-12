import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { ContainerWrap, MainSection } from "../styles/components/layout";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { DashboardWrap } from "../styles/pages/dashboard";
import { StatusIndicator, Spinner, toaster } from "evergreen-ui";
import { SpinnerWrap } from "../styles/components/helpers";

export default function DashboardPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {}, [currentUser]);

  return (
    <>
      <Head>
        <title>Dash Directory | Dashboard</title>
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

      <MainSection>
        <ContainerWrap>
          <DashboardWrap>
            {currentUser ? (
              <>
                {!currentUser?.emailVerified || !currentUser?.displayName ? (
                  <StatusIndicator color="warning">
                    Hi
                    {currentUser?.displayName
                      ? `, ${currentUser?.displayName}`
                      : ""}
                    . Please verify your email in order to fully use Dash
                    Directory.
                  </StatusIndicator>
                ) : (
                  <StatusIndicator color="success">
                    Welcome, {currentUser?.displayName}! <br /> Your Dashboard
                    is still in developer-mode. Thanks for being patient.
                  </StatusIndicator>
                )}
              </>
            ) : (
              <SpinnerWrap>
                <Spinner size={32} />
              </SpinnerWrap>
            )}
          </DashboardWrap>
        </ContainerWrap>

        <Footer theme={theme} />
      </MainSection>
    </>
  );
}

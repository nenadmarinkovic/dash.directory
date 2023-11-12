import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import {
  ContainerWrap,
  MainSection,
  MainWrap,
  ThemeLayout,
} from "../styles/components/layout";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { DashboardWrap } from "../styles/pages/dashboard";
import { StatusIndicator, Spinner, toaster, Alert } from "evergreen-ui";
import { AlertWrap } from "../styles/components/helpers";

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
      <ThemeLayout>
        <MainSection>
          <ContainerWrap>
            <DashboardWrap>
              {currentUser ? (
                <>
                  {!currentUser?.emailVerified || !currentUser?.displayName ? (
                    <StatusIndicator
                      color="warning"
                      style={{ color: "#696f8c" }}
                    >
                      Hi
                      {currentUser?.displayName
                        ? `, ${currentUser?.displayName}`
                        : ""}
                      . Please verify your email in order to fully use Dash
                      Directory.
                    </StatusIndicator>
                  ) : (
                    <StatusIndicator
                      color="success"
                      style={{ color: "#696f8c" }}
                    >
                      Welcome, {currentUser?.displayName}! <br /> Your Dashboard
                      is still in developer-mode. Thanks for being patient.
                    </StatusIndicator>
                  )}
                </>
              ) : (
                <AlertWrap>
                  <Alert
                    style={{ color: "#696f8c" }}
                    intent="warning"
                    title="Sign up or log in to use Dashboard"
                    marginBottom={32}
                  >
                    This page is available only to authenticated users.
                  </Alert>
                </AlertWrap>
              )}
            </DashboardWrap>
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

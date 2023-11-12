import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import {
  ContainerWrap,
  MainSection,
  ThemeLayout,
} from "../styles/components/layout";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { DashboardWrap } from "../styles/pages/dashboard";
import { StatusIndicator, Alert, Text, Strong } from "evergreen-ui";
import { AlertWrap } from "../styles/components/helpers";

export default function DashboardPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useAuth();

  // TODO: Move this logic
  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";

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
                    <StatusIndicator color="warning">
                      <Text color={textColor}>
                        Hi
                        <Strong color={textColor}>
                          {currentUser?.displayName &&
                            `, ${currentUser?.displayName}`}
                        </Strong>
                        . Please verify your email in order to fully use Dash
                        Directory.
                      </Text>
                    </StatusIndicator>
                  ) : (
                    <StatusIndicator color="success">
                      <Text color={textColor}>
                        Welcome,
                        <Strong color={textColor}>
                          {currentUser?.displayName}
                        </Strong>
                        ! <br /> Your Dashboard is still in developer-mode.
                        Thanks for being patient.
                      </Text>
                    </StatusIndicator>
                  )}
                </>
              ) : (
                <AlertWrap>
                  <Alert
                    intent="warning"
                    title="Sign up or log in to use Dashboard"
                    marginBottom={32}
                  >
                    <Text color={textMuted} display="block" paddingTop={10}>
                      This page is available only to authenticated users.
                    </Text>
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

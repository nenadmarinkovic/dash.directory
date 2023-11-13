import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Heading, Button, Paragraph, Text, Dialog } from "evergreen-ui";
import {
  ContainerWrap,
  MainSection,
  CenteredSection,
  CenteredLayout,
  ThemeLayout,
} from "../styles/components/layout";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";
import Sign from "../components/Sign";
import Link from "next/link";

export default function SignupPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isShownEmail, setIsShownEmail] = useState(false);
  const [isShownGithub, setIsShownGithub] = useState(false);

  const { currentUser } = useAuth();

  let bw = theme === "light" ? "#000" : "#FFF";

  return (
    <>
      <Head>
        <title>Dash Directory | Settings</title>
        <meta name="description" content="Web directory for organized minds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        isShown={false}
        currentUser={currentUser}
      />

      <ThemeLayout>
        <MainSection>
          <ContainerWrap>
            <CenteredSection>
              <Heading
                is="h1"
                align="center"
                marginTop={8}
                lineHeight={1.25}
                fontSize={58}
                marginBottom={8}
                fontWeight={900}
                color={bw}
                letterSpacing="-.003rem"
              >
                Settings
              </Heading>
              <Paragraph
                size={500}
                lineHeight={1.75}
                textAlign="center"
                marginTop={30}
                color="muted"
              >
                In development mode.
              </Paragraph>
            </CenteredSection>
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}
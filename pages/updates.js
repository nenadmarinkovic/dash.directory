import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Heading } from "evergreen-ui";
import {
  ContainerWrap,
  MainSection,
  CenteredSection,
} from "../styles/components/layout";
import { UpdatesWrap, Update } from "../styles/components/updates";
import Footer from "../components/Footer";

export default function Home({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  let bw = theme === "light" ? "#000" : "#FFF";
  return (
    <>
      <Head>
        <title>Dash Directory | Updates</title>
        <meta name="description" content="Web directory for organized minds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

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
              Updates
            </Heading>
            <UpdatesWrap>
              <Update>
                <Heading
                  is="h4"
                  lineHeight={1.25}
                  fontSize={28}
                  marginBottom={8}
                  fontWeight={900}
                  color={bw}
                  letterSpacing="-.003rem"
                >
                  Present
                </Heading>
                <span>
                  The development phase progresses, with the implementation of
                  core functionalities and user experience refinements.
                </span>
              </Update>
              <Update>
                <Heading
                  is="h4"
                  lineHeight={1.25}
                  fontSize={28}
                  marginBottom={8}
                  fontWeight={900}
                  color={bw}
                  letterSpacing="-.003rem"
                >
                  January 2023
                </Heading>
                <span>
                  The development begins with working on the initial concept and
                  design of Dash Directory, outlining the key features and user
                  interface.
                </span>
              </Update>
              <Update>
                <Heading
                  is="h4"
                  lineHeight={1.25}
                  fontSize={28}
                  marginBottom={8}
                  fontWeight={900}
                  color={bw}
                  letterSpacing="-.003rem"
                >
                  June 2022
                </Heading>
                <span>
                  The idea for Dash Directory is conceived, with plans to create
                  a platform for task and event management, bookmark
                  organization, and enhanced productivity for my personal use.
                </span>
              </Update>
            </UpdatesWrap>
          </CenteredSection>
        </ContainerWrap>
        <Footer theme={theme} />
      </MainSection>
    </>
  );
}

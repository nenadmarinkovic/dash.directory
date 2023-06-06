import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { ContainerWrap, MainSection } from "../styles/components/layout";
import Footer from "../components/Footer";

export default function Home({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
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
          <div>Updates: Soon</div>
        </ContainerWrap>
        <Footer theme={theme} />
      </MainSection>
    </>
  );
}

import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { MainSection, ThemeLayout } from "../styles/components/layout";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";

export default function Home({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Dash Directory</title>
        <meta name="description" content="Web directory for organized minds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <ThemeLayout openMenu={openMenu}>
        <MainSection>
          <Banner theme={theme} />
          <Cards theme={theme} />
        </MainSection>
      </ThemeLayout>
    </>
  );
}

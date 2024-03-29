import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { MainSection } from '../styles/components/layout';
import Banner from '../components/Banner';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import { useServices } from '../services/ServicesProvider';

export default function HomePage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useServices();

  return (
    <>
      <Head>
        <title>Dash Directory</title>
        <meta name='description' content='Web directory for organized minds' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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
        <Banner theme={theme} />
        <About theme={theme} currentUser={currentUser} />
        <Pricing theme={theme} />
        <Footer theme={theme} />
      </MainSection>
    </>
  );
}

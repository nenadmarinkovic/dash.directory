import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Heading, Button, Paragraph, Text } from "evergreen-ui";
import {
  ContainerWrap,
  MainSection,
  CenteredSection,
  CenteredLayout,
  ThemeLayout,
} from "../styles/components/layout";
import { useServices } from "../services/ServicesProvider";
import Footer from "../components/Footer";
import { useThemeColors } from "../styles/theme";
import Link from "next/link";

export default function SignupPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useServices();
  const { textColor } = useThemeColors(theme);

  return (
    <>
      <Head>
        <title>Dash Directory | Not found</title>
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
                color={textColor}
                letterSpacing="-.003rem"
              >
                404 - Page not found.
              </Heading>
              <Paragraph
                size={500}
                lineHeight={1.75}
                textAlign="center"
                marginTop={30}
                color="muted"
              >
                It looks like you have stumbled upon a page that does not exist.
                This might be because the link is outdated, the page has been
                moved, or it never existed in the first place.
              </Paragraph>
            </CenteredSection>
            <CenteredLayout>
              {currentUser ? (
                <Link href="/i">
                  <Button
                    className="custom-button-big"
                    appearance="primary"
                    fontWeight="bold"
                    width={280}
                    height={50}
                  >
                    <Text fontWeight="bold" color="#FFF">
                      Go to start page
                    </Text>
                  </Button>
                </Link>
              ) : (
                <Link href="/signup">
                  <Button
                    className="custom-button-big"
                    appearance="primary"
                    fontWeight="bold"
                    width={280}
                    height={50}
                  >
                    <Text fontWeight="bold" color="#FFF">
                      Create account
                    </Text>
                  </Button>
                </Link>
              )}
            </CenteredLayout>
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

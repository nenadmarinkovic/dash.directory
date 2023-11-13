import { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Heading, Text, Button, Paragraph, Pane, Dialog } from "evergreen-ui";
import {
  ContainerWrap,
  MainSection,
  CenteredSection,
  CenteredLayout,
  ThemeLayout,
} from "../styles/components/layout";
import Footer from "../components/Footer";
import Sign from "../components/Sign";

export default function SignupPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [isShownEmail, setIsShownEmail] = useState(false);
  const [isShownGithub, setIsShownGithub] = useState(false);

  let bw = theme === "light" ? "#000" : "#FFF";

  return (
    <>
      <Head>
        <title>Dash Directory | Signup</title>
        <meta name="description" content="Web directory for organized minds" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        isShown={false}
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
                Create your profile
              </Heading>
              <Paragraph
                size={500}
                lineHeight={1.75}
                textAlign="center"
                marginTop={30}
                color="muted"
              >
                This page is currently under development. This new feature will
                allow you to securely access your Dash Directory account,
                ensuring a personalized and seamless experience.
              </Paragraph>
            </CenteredSection>
            <CenteredLayout>
              <Pane>
                <Dialog
                  containerProps={{ className: "themed-modal" }}
                  isShown={isShownGithub}
                  title="Continue with GitHub"
                  onCloseComplete={() => setIsShownGithub(false)}
                  confirmLabel="Ok"
                >
                  We appreciate your patience and look forward to unveiling this
                  exciting addition to our platform in the near future. Stay
                  tuned for updates!
                </Dialog>
                <Button
                  onClick={() => setIsShownGithub(true)}
                  className="custom-button-big-svg"
                  appearance="primary"
                  intent="success"
                  fontWeight="bold"
                  width={280}
                  height={50}
                  marginTop={25}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="white"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                    ></path>
                  </svg>
                  <Text fontWeight="bold" color="#FFF">
                    Continue with GitHub
                  </Text>
                </Button>
              </Pane>
              <Pane>
                <Dialog
                  containerProps={{ className: "themed-modal" }}
                  isShown={isShownEmail}
                  title="Signup to Dash Directory"
                  onCloseComplete={() => setIsShownEmail(false)}
                  theme={theme}
                  hasFooter={false}
                >
                  <Sign theme={theme} />
                </Dialog>

                <Button
                  onClick={() => setIsShownEmail(true)}
                  className="custom-button-big-svg"
                  appearance="primary"
                  fontWeight="bold"
                  width={280}
                  height={50}
                  marginTop={25}
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <Text fontWeight="bold" color="#FFF">
                    Continue with Email
                  </Text>
                </Button>
              </Pane>
            </CenteredLayout>
          </ContainerWrap>
        </MainSection>
        <Footer theme={theme} />
      </ThemeLayout>
    </>
  );
}

import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Heading, Paragraph, Strong } from "evergreen-ui";
import {
  ContainerWrap,
  MainSection,
  CenteredSection,
} from "../styles/components/layout";
import { UpdatesWrap } from "../styles/components/updates";
import Footer from "../components/Footer";

export default function TermsPage({ theme, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);

  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";
  return (
    <>
      <Head>
        <title>Dash Directory | Terms of Service</title>
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
              color={textColor}
              letterSpacing="-.003rem"
            >
              Terms of Service
            </Heading>
            <UpdatesWrap>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                Welcome to Dash Directory! These terms of service
                (&quot;Terms&quot;) govern your use of our platform. By
                accessing or using Dash Directory, you agree to be bound by
                these Terms. Please read them carefully before using our
                services.
              </Paragraph>

              <Strong
                display="block"
                marginTop={18}
                marginBottom={18}
                size={500}
                color={textColor}
                lineHeight={1.75}
              >
                User Responsibilities
              </Strong>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                a. You are responsible for maintaining the confidentiality of
                your account information and for all activities that occur under
                your account.
              </Paragraph>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                b. You agree to use Dash Directory in compliance with all
                applicable laws and regulations.
              </Paragraph>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                c. You are responsible for any content you submit or share on
                Dash Directory and ensure that it does not infringe on any
                third-party rights.
              </Paragraph>

              <Strong
                display="block"
                marginTop={18}
                marginBottom={18}
                size={500}
                color={textColor}
                lineHeight={1.75}
              >
                Use of the Platform
              </Strong>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                a. Dash Directory grants you a personal, non-transferable,
                non-exclusive, revocable license to use the platform for
                personal and non-commercial purposes.
              </Paragraph>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                b. You may not modify, adapt, copy, distribute, transmit,
                display, perform, reproduce, publish, license, create derivative
                works from, transfer, or sell any information, software,
                products, or services obtained from Dash Directory.
              </Paragraph>
              <Strong
                display="block"
                marginTop={18}
                marginBottom={18}
                size={500}
                color={textColor}
                lineHeight={1.75}
              >
                Privacy
              </Strong>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                a. We respect your privacy and handle your personal information
                in accordance with our Privacy Policy.
              </Paragraph>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                b. By using Dash Directory, you consent to the collection, use,
                and disclosure of your information as described in our Privacy
                Policy.
              </Paragraph>

              <Strong
                display="block"
                marginTop={18}
                marginBottom={18}
                size={500}
                color={textColor}
                lineHeight={1.75}
              >
                Intellectual Property
              </Strong>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                a. All content, trademarks, logos, and intellectual property
                rights on Dash Directory belong to us or our licensors.
              </Paragraph>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                b. You may not use, reproduce, or distribute any copyrighted
                material or trademarks without our prior written consent.
              </Paragraph>
              <Strong
                display="block"
                marginTop={18}
                marginBottom={18}
                size={500}
                color={textColor}
                lineHeight={1.75}
              >
                Limitation of Liability
              </Strong>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                a. Dash Directory is provided on an &quot;as-is&quot; and
                &quot;as available&quot; basis, and we make no warranties or
                representations regarding its functionality or reliability.
              </Paragraph>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                b. We shall not be liable for any indirect, incidental, special,
                or consequential damages arising out of your use or inability to
                use Dash Directory.
              </Paragraph>
              <Strong
                display="block"
                marginTop={18}
                marginBottom={18}
                size={500}
                color={textColor}
                lineHeight={1.75}
              >
                Termination
              </Strong>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                a. We may terminate or suspend your access to Dash Directory at
                any time without prior notice if you violate these Terms.
              </Paragraph>
              <Paragraph color={textMuted} size={500} lineHeight={1.75}>
                b. Upon termination, you must cease all use of Dash Directory
                and any associated materials.
              </Paragraph>
              <Paragraph
                color={textMuted}
                size={500}
                lineHeight={1.75}
                display="block"
                marginTop={18}
                marginBottom={18}
              >
                Governing Law These Terms shall be governed by and construed in
                accordance with the laws of the jurisdiction where Dash
                Directory is operated. Please review these Terms periodically,
                as we may update them from time to time. By continuing to use
                Dash Directory, you accept any revised Terms.
              </Paragraph>
              <Paragraph
                color={textColor}
                size={500}
                lineHeight={1.75}
                display="block"
                marginTop={18}
                marginBottom={18}
              >
                Last updated: 12.10.2023
              </Paragraph>
            </UpdatesWrap>
          </CenteredSection>
        </ContainerWrap>
        <Footer theme={theme} />
      </MainSection>
    </>
  );
}

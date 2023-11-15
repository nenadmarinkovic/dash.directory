import React from "react";
import {
  FooterWrap,
  FooterInside,
  FooterFlex,
  Year,
  ContactWrap,
} from "../styles/components/footer";
import { ContainerWrap } from "../styles/components/layout";
import { Text } from "evergreen-ui";
import Link from "next/link";
import Logo from "./Logo";
import { useThemeColors } from "../styles/theme";

function Footer({ theme }) {
  const { textMuted } = useThemeColors(theme);

  return (
    <FooterWrap>
      <ContainerWrap>
        <FooterInside>
          <FooterFlex>
            <Logo theme={theme} />
            <Text color={textMuted} marginTop={25}>
              Currently in Development mode.
            </Text>
            <Text color={textMuted} marginTop={10}>
              See <Link href="/updates">Updates</Link> for more.
            </Text>
          </FooterFlex>

          <FooterFlex className="links">
            <Text color={textMuted} marginTop={15}>
              <Link href="/terms">Terms of Service</Link>
            </Text>
            <ContactWrap>
              <Text color={textMuted} marginTop={15}>
                For any inquiries, assistance, suggestions, or bug reports, feel
                free to reach out at{" "}
                <a
                  className="email"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:hello@dash.directory"
                >
                  hello@dash.directory
                </a>
                .
              </Text>
            </ContactWrap>
          </FooterFlex>
        </FooterInside>
      </ContainerWrap>
      <Year>
        <Text
          paddingTop={30}
          paddingBottom={30}
          display="block"
          width="100%"
          textAlign="center"
          fontSize={13}
          marginTop="auto"
          color={textMuted}
        >
          © {new Date().getFullYear()} Dash Directory
        </Text>
      </Year>
    </FooterWrap>
  );
}

export default Footer;

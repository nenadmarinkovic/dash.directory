import React from "react";
import {
  FooterWrap,
  FooterInside,
  FooterFlex,
  Year,
} from "../styles/components/footer";
import { ContainerWrap } from "../styles/components/layout";
import { Text } from "evergreen-ui";
import Link from "next/link";
import Logo from "./Logo";

function Footer({ theme }) {
  // TODO: Move this logic
  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";
  return (
    <FooterWrap>
      <ContainerWrap>
        <FooterInside>
          <FooterFlex>
            <Logo theme={theme} />
            <Text color={textColor} marginTop={25}>
              Currently in Development mode.
            </Text>
            <Text color={textColor} marginTop={10}>
              See <Link href="/updates">Updates</Link> for more.
            </Text>
          </FooterFlex>

          <FooterFlex className="links">
            <Text color={textMuted} marginTop={15}>
              <Link href="/terms">Terms of Service</Link>
            </Text>
            <Text color={textMuted} marginTop={15}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://nenadmarinkovic.com"
              >
                Contact the developer
              </a>
            </Text>
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

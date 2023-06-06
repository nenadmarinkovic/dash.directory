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
  let bw = theme === "light" ? "#000" : "#FFF";
  return (
    <FooterWrap>
      <ContainerWrap>
        <FooterInside>
          <FooterFlex>
            <Logo theme={theme} />
            <Text color={bw} marginTop={25}>
              Currently in Development mode.
            </Text>
            <Text color={bw} marginTop={10}>
              See <Link href="/updates">Updates</Link> for more.
            </Text>
          </FooterFlex>

          <FooterFlex className="links">
            <Text color="muted">About the Platform</Text>
            <Text color="muted" marginTop={15}>
              Terms of Service
            </Text>
            <Text color="muted" marginTop={15}>
              <a href="https://nenadmarinkovic.com">Contact the developer</a>
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
        >
          © {new Date().getFullYear()} Dash Directory
        </Text>
      </Year>
    </FooterWrap>
  );
}

export default Footer;

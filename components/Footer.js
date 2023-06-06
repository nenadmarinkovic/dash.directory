import React from "react";
import {
  FooterWrap,
  FooterInside,
  FooterFlex,
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
            <Text fontSize={13} marginTop="auto"> © {new Date().getFullYear()} Dash Directory</Text>
          </FooterFlex>
        </FooterInside>
      </ContainerWrap>
    </FooterWrap>
  );
}

export default Footer;

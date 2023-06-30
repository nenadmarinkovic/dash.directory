import {
  HeaderWrap,
  HeaderMain,
  HeaderLinks,
  HeaderLink,
  ThemeButton,
} from "../styles/components/header";
import { ContainerWrap } from "../styles/components/layout";
import { Button, Text } from "evergreen-ui";
import Logo from "./Logo";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";

function Header({ theme, toggleTheme, showHeaderLink }) {
  return (
    <>
      <HeaderWrap>
        <ContainerWrap>
          <HeaderMain>
            <Link href="/">
              <Logo theme={theme} />
            </Link>
            <HeaderLinks>
              <HeaderLink style={{ display: `${!showHeaderLink && "none"}` }}>
                <ScrollIntoView selector="#about">
                  <Text>About</Text>
                </ScrollIntoView>
              </HeaderLink>
              <HeaderLink style={{ display: `${!showHeaderLink && "none"}` }}>
                <ScrollIntoView selector="#pricing">
                  <Text>Pricing</Text>
                </ScrollIntoView>
              </HeaderLink>
              <ThemeButton onClick={toggleTheme}>
                <Text> {theme === "light" ? "Dark mode" : "Light mode"}</Text>
              </ThemeButton>

              <Link href="/signup">
                <Button className="themed-button" width={100}>
                  Sign up
                </Button>
              </Link>
            </HeaderLinks>
          </HeaderMain>
        </ContainerWrap>
      </HeaderWrap>
    </>
  );
}

export default Header;

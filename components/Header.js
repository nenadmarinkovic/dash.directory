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

function Header({ theme, toggleTheme }) {
  return (
    <>
      <HeaderWrap>
        <ContainerWrap>
          <HeaderMain>
            <Link href="/">
              <Logo theme={theme} />
            </Link>
            <HeaderLinks>
              <HeaderLink>
                <Text>About</Text>
              </HeaderLink>
              <HeaderLink>
                <Text>Pricing</Text>
              </HeaderLink>
              <HeaderLink>
                <Text>Contact</Text>
              </HeaderLink>
              <ThemeButton onClick={toggleTheme}>
                <Text> {theme === "light" ? "Dark mode" : "Light mode"}</Text>
              </ThemeButton>
              <HeaderLink>
                <Text>Login</Text>
              </HeaderLink>
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

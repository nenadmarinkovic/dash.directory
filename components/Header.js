import {
  HeaderWrap,
  HeaderMain,
  HeaderLinks,
  HeaderLink,
  ThemeButton,
} from "../styles/components/header";
import { ContainerWrap } from "../styles/components/layout";
import { Text } from "evergreen-ui";
import Logo from "./Logo";
import Modal from "@/components/Modal";
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
                <Text>Login</Text>
              </HeaderLink>
              <ThemeButton onClick={toggleTheme}>
                <Text> {theme === "light" ? "Dark mode" : "Light mode"}</Text>
              </ThemeButton>
              <Modal />
            </HeaderLinks>
          </HeaderMain>
        </ContainerWrap>
      </HeaderWrap>
    </>
  );
}

export default Header;

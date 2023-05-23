import {
  HeaderWrap,
  HeaderMain,
  HeaderLinks,
  HeaderLink,
  ThemeButton,
} from "../styles/components/header";
import { ContainerWrap } from "./Container";
import { Text } from "evergreen-ui";
import Logo from "./Logo";
import Modal from "@/components/Modal";

function Header({ theme, toggleTheme }) {
  return (
    <>
      <HeaderWrap>
        <ContainerWrap>
          <HeaderMain>
            <Logo theme={theme} />
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

// import { Container } from "../Container/Container";
import {
  HeaderWrap,
  HeaderMain,
  HeaderLinks,
  HeaderLink,
  ThemeButton,
} from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContainerWrap } from "../Container/Container";
import { Small, Text } from "evergreen-ui";
import Image from "next/image";
import Logo from "../Logo/Logo";
import Modal from "@/components/common/Modal/Modal";
// import Menu from "./Menu";

function Header({ theme, toggleTheme, openMenu, setOpenMenu }) {
  const router = useRouter();

  return (
    <>
      <HeaderWrap>
        <ContainerWrap>
          <HeaderMain>
           <Logo theme={theme}/>

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
        
            {/* <MenuButton>
              <Menu
                theme={theme}
                toggleTheme={toggleTheme}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            </MenuButton> */}
          </HeaderMain>
        </ContainerWrap>
      </HeaderWrap>
    </>
  );
}

export default Header;

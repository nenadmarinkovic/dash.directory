// import { Container } from "../Container/Container";
import {
  HeaderWrap,
  HeaderMain,
  HomeLink,
  HeaderLinks,
  HeaderLink,
  ThemeButton,
} from "./styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { ContainerWrap } from "../Container/Container";
// import Menu from "./Menu";

function Header({ theme, toggleTheme, openMenu, setOpenMenu }) {
  const router = useRouter();

  return (
    <>
      <HeaderWrap>
        <ContainerWrap>
          <HeaderMain>
            <HomeLink>
              <Link
                href="/"
                className={router.pathname === "/" ? "active-link" : ""}
              >
                Home
              </Link>
            </HomeLink>
            <HeaderLinks>
              <HeaderLink>About</HeaderLink>
              <HeaderLink>Pricing</HeaderLink>
              <HeaderLink>Login</HeaderLink>
              <ThemeButton onClick={toggleTheme}>
                {theme === "light" ? "Dark mode" : "Light mode"}
              </ThemeButton>
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

import {
  HeaderWrap,
  HeaderMain,
  HeaderLinks,
  HeaderLink,
  ThemeButton,
} from "../styles/components/header";
import { ContainerWrap } from "../styles/components/layout";
import { Button, Text, toaster } from "evergreen-ui";
import Logo from "./Logo";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

function Header({ theme, toggleTheme, showHeaderLink, currentUser }) {
  const { logout: authLogout } = useAuth();

  const router = useRouter();

  const handleLogout = () => {
    authLogout().then(() => {
      router.push("/");
      toaster.success("You successfully logged out.");
    });
  };

  return (
    <>
      <HeaderWrap>
        <ContainerWrap>
          <HeaderMain>
            <Link href="/">
              <Logo theme={theme} />
            </Link>
            <HeaderLinks>
              {!currentUser && (
                <>
                  <HeaderLink
                    style={{ display: `${!showHeaderLink && "none"}` }}
                  >
                    <ScrollIntoView selector="#about">
                      <Text>About</Text>
                    </ScrollIntoView>
                  </HeaderLink>
                  <HeaderLink
                    style={{ display: `${!showHeaderLink && "none"}` }}
                  >
                    <ScrollIntoView selector="#pricing">
                      <Text>Pricing</Text>
                    </ScrollIntoView>
                  </HeaderLink>
                </>
              )}

              {currentUser && (
                <HeaderLink style={{ display: `${!showHeaderLink && "none"}` }}>
                  <Link href="/dashboard">
                    <Text>Dashboard</Text>
                  </Link>
                </HeaderLink>
              )}

              <ThemeButton onClick={toggleTheme}>
                <Text> {theme === "light" ? "Dark mode" : "Light mode"}</Text>
              </ThemeButton>

              {!currentUser ? (
                <Link href="/signup">
                  <Button className="themed-button" width={100}>
                    Sign up
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={handleLogout}
                  className="themed-button"
                  width={100}
                >
                  Logout
                </Button>
              )}
            </HeaderLinks>
          </HeaderMain>
        </ContainerWrap>
      </HeaderWrap>
    </>
  );
}

export default Header;

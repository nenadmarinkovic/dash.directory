import {
  HeaderWrap,
  HeaderMain,
  HeaderLinks,
  HeaderLink,
  ThemeButton,
} from "../styles/components/header";
import { ContainerWrap } from "../styles/components/layout";
import { Button, StatusIndicator, Text, toaster } from "evergreen-ui";
import Logo from "./Logo";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

function Header({ theme, toggleTheme, showHeaderLink, currentUser }) {
  const { logout: authLogout } = useAuth();

  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";

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
              {!currentUser && router.pathname === "/" && (
                <>
                  <HeaderLink>
                    <ScrollIntoView selector="#about">
                      <Text color={textMuted}>About</Text>
                    </ScrollIntoView>
                  </HeaderLink>
                  <HeaderLink>
                    <ScrollIntoView selector="#pricing">
                      <Text color={textMuted}>Pricing</Text>
                    </ScrollIntoView>
                  </HeaderLink>
                </>
              )}

              {!router.pathname.startsWith("/i") && currentUser && (
                <HeaderLink className="no-pointer">
                  <StatusIndicator color="success">
                    <Text color={textMuted}>
                      You are logged in, {currentUser.displayName}.
                    </Text>
                  </StatusIndicator>
                </HeaderLink>
              )}

              {currentUser && (
                <HeaderLink>
                  <Link href="/i">
                    <Text
                      color={
                        router.pathname.startsWith("/i") ? textColor : textMuted
                      }
                    >
                      Start page
                    </Text>
                  </Link>
                </HeaderLink>
              )}

              <ThemeButton onClick={toggleTheme}>
                <Text color={textMuted}>
                  {theme === "light" ? "Dark mode" : "Light mode"}
                </Text>
              </ThemeButton>

              {!currentUser ? (
                <Link href="/signup">
                  <Button
                    className="themed-button"
                    fontWeight="bold"
                    width={100}
                  >
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

import React, { useEffect, useState } from 'react';
import {
  FooterWrap,
  FooterInside,
  FooterFlex,
  Year,
  ContactWrap,
} from '../styles/components/footer';
import { ContainerWrap } from '../styles/components/layout';
import { Button, CornerDialog, Pane, Text } from 'evergreen-ui';
import Link from 'next/link';
import Logo from './Logo';
import { useThemeColors } from '../styles/theme';
import { useServices } from '../services/ServicesProvider';

function Footer({ theme }) {
  const { textMuted, textColor } = useThemeColors(theme);
  const [isCookieDialogShown, setIsCookieDialogShown] = useState(false);
  const { currentUser, cookieBannerAccepted, handleCookieBannerAccept } = useServices();

  useEffect(() => {
    if (!cookieBannerAccepted) {
      const timeoutId = setTimeout(() => {
        setIsCookieDialogShown(true);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [cookieBannerAccepted]);

  useEffect(() => {
    if (currentUser) {
      const timeoutId = setTimeout(() => {
        setIsCookieDialogShown(true);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [currentUser]);

  useEffect(() => {}, [currentUser]);

  return (
    <FooterWrap>
      {!cookieBannerAccepted && (
        <CornerDialog
          containerProps={{ className: 'themed-cookie-dialog' }}
          title='Cookies'
          isShown={isCookieDialogShown}
          onCloseComplete={() => setIsCookieDialogShown(false)}
          hasFooter={false}
          hasClose={false}
        >
          {({ close }) => (
            <Pane>
              <Text color={textMuted}>
                We use cookies to enhance your experience on our website. By continuing to use this
                site, you consent to the use of cookies.
              </Text>
              <br />

              <Button
                className='themed-button'
                fontWeight='bold'
                marginTop={30}
                onClick={() => {
                  handleCookieBannerAccept();
                  close();
                }}
              >
                Accept Cookies
              </Button>
            </Pane>
          )}
        </CornerDialog>
      )}
      <ContainerWrap>
        <FooterInside>
          <FooterFlex>
            <Logo theme={theme} />
            <Text color={textMuted} marginTop={25}>
              Currently in Development mode.
            </Text>
            <Text color={textMuted} marginTop={10}>
              See <Link href='/updates'>Updates</Link> for more.
            </Text>
          </FooterFlex>

          <FooterFlex className='links'>
            <Text color={textMuted} marginTop={15}>
              <Link href='/terms'>Terms of Service</Link>
            </Text>
            <ContactWrap>
              <Text color={textMuted} marginTop={15}>
                For any inquiries, assistance, suggestions, or bug reports, feel free to reach out
                at{' '}
                <a
                  className='email'
                  target='_blank'
                  rel='noreferrer'
                  href='mailto:hello@dash.directory'
                >
                  hello@dash.directory
                </a>
                .
              </Text>
            </ContactWrap>
          </FooterFlex>
        </FooterInside>
      </ContainerWrap>
      <Year>
        <Text
          paddingTop={30}
          paddingBottom={30}
          display='block'
          width='100%'
          textAlign='center'
          fontSize={13}
          marginTop='auto'
          color={textMuted}
        >
          © {new Date().getFullYear()} Dash Directory
        </Text>
      </Year>
    </FooterWrap>
  );
}

export default Footer;

import React from 'react';
import {
  StartMenuWrap,
  StartMenuItem,
  StartMenuLogo,
  StartMenuTitle,
  StartMenuText,
} from '../styles/components/startmenu';
import { Heading, Paragraph, Text } from 'evergreen-ui';
import Link from 'next/link';
import { useThemeColors } from '../styles/theme';

function StartMenu({ theme }) {
  const { textColor, textMuted } = useThemeColors(theme);

  return (
    <div>
      <StartMenuWrap>
        <Link href='/i/bookmarks'>
          <StartMenuTitle>
            <StartMenuLogo>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={textColor}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                />
              </svg>
            </StartMenuLogo>
            <Heading
              is='h2'
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing='-.003rem'
            >
              Bookmarks
            </Heading>
          </StartMenuTitle>
          <StartMenuText>
            <Paragraph size={500} color={textMuted} marginTop={18} lineHeight={1.75}>
              Organize your internet life. Save and categorize your favorite website links, making
              it easy to revisit and stay connected with what matters most to you.
            </Paragraph>
          </StartMenuText>
        </Link>
        <Link href='i/tasks'>
          <StartMenuTitle>
            <StartMenuLogo>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={textColor}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12'
                />
              </svg>
            </StartMenuLogo>

            <Heading
              is='h2'
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing='-.003rem'
            >
              Tasks
            </Heading>
          </StartMenuTitle>
          <StartMenuText>
            <Paragraph size={500} color={textMuted} marginTop={18} lineHeight={1.75}>
              Boost your productivity. Manage your to-do list efficiently, keeping track of tasks
              and ensuring you stay on top of your day.
            </Paragraph>
          </StartMenuText>
        </Link>
        <Link href='i/events'>
          <StartMenuTitle>
            <StartMenuLogo>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={textColor}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
                />
              </svg>
            </StartMenuLogo>
            <Heading
              is='h2'
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing='-.003rem'
            >
              Events
            </Heading>
          </StartMenuTitle>
          <StartMenuText>
            <Paragraph size={500} color={textMuted} marginTop={18} lineHeight={1.75}>
              Never miss a beat. Stay up-to-date on your schedule by keeping track of upcoming dates
              and events, ensuring you are always in the right place at the right time.
            </Paragraph>
          </StartMenuText>
        </Link>

        <Link href='i/notes'>
          <StartMenuTitle>
            <StartMenuLogo>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={textColor}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                />
              </svg>
            </StartMenuLogo>

            <Heading
              is='h2'
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing='-.003rem'
            >
              Notes
            </Heading>
          </StartMenuTitle>
          <StartMenuText>
            <Paragraph size={500} color={textMuted} marginTop={18} lineHeight={1.75}>
              Your personal notepad. Capture and store important information, quick thoughts, or
              creative ideas, all in one convenient place.
            </Paragraph>
          </StartMenuText>
        </Link>
      </StartMenuWrap>
    </div>
  );
}

export default StartMenu;

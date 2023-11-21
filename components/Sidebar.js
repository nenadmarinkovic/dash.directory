import React from 'react';
import { SidebarWrap, SidebarItem, SidebarItems } from '../styles/components/sidebar';
import { Text } from 'evergreen-ui';
import Link from 'next/link';
import { useThemeColors } from '../styles/theme';
import { useRouter } from 'next/router';

function Sidebar({ theme }) {
  const { textColor, textMuted } = useThemeColors(theme);

  const router = useRouter();

  return (
    <>
      <SidebarWrap>
        <SidebarItems>
          <SidebarItem>
            <Link href='/i/bookmarks'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={router.pathname === '/i/bookmarks' ? textColor : textMuted}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                />
              </svg>

              <Text color={router.pathname === '/i/bookmarks' ? textColor : textMuted}>
                Bookmarks
              </Text>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href='/i/tasks'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={router.pathname === '/i/tasks' ? textColor : textMuted}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12'
                />
              </svg>

              <Text color={router.pathname === '/i/tasks' ? textColor : textMuted}>Tasks</Text>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href='/i/events'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={router.pathname === '/i/events' ? textColor : textMuted}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
                />
              </svg>
              <Text color={router.pathname === '/i/events' ? textColor : textMuted}>Events</Text>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href='/i/notes'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={router.pathname === '/i/notes' ? textColor : textMuted}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                />
              </svg>
              <Text color={router.pathname === '/i/notes' ? textColor : textMuted}>Notes</Text>
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href='/i/settings'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={router.pathname === '/i/settings' ? textColor : textMuted}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>

              <Text fontSize={14} color={router.pathname === '/i/settings' ? textColor : textMuted}>
                Settings
              </Text>
            </Link>
          </SidebarItem>
        </SidebarItems>
      </SidebarWrap>
    </>
  );
}

export default Sidebar;

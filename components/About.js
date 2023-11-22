import React from 'react';
import {
  AboutWrap,
  AboutFlex,
  AboutTitle,
  AboutTitleFlex,
  AboutSmall,
  AboutFull,
  AboutItems,
  AboutItem,
} from '../styles/components/about';
import { Heading, Paragraph, Text } from 'evergreen-ui';
import { ContainerWrap } from '../styles/components/layout';
import { Circle, Line } from '../styles/components/helpers';
import Animation from './Animation';
import Title from './Title';
import { useThemeColors } from '../styles/theme';

function About({ theme, currentUser }) {
  const { textColor, textMuted } = useThemeColors(theme);

  return (
    <AboutWrap>
      <ContainerWrap>
        <Title theme={theme} title='About the platform' id='about' />
        <AboutTitle>
          <Line />
          <Circle>1</Circle>
          <Heading
            is='h2'
            marginTop={8}
            lineHeight={1.25}
            fontSize={38}
            marginBottom={8}
            fontWeight={900}
            color={textColor}
            letterSpacing='-.003rem'
            textAlign='center'
          >
            It&apos;s all about efficiency
          </Heading>

          <Paragraph
            size={500}
            color={textMuted}
            marginTop={18}
            lineHeight={1.75}
            textAlign='center'
          >
            Dash Directory is designed to help you boost your focus and productivity. Here&apos;s a
            short text highlighting how our platform can support you in achieving your goals:
          </Paragraph>
        </AboutTitle>
        <AboutFlex>
          <AboutSmall>
            <AboutTitleFlex>
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

              <Heading
                is='h2'
                lineHeight={1.25}
                fontSize={32}
                fontWeight={800}
                color={textColor}
                letterSpacing='-.003rem'
              >
                Write notes
              </Heading>
            </AboutTitleFlex>

            <Paragraph size={500} color={textMuted} marginTop={18} lineHeight={1.75}>
              Easily write down your thoughts, ideas, and important information in a user-friendly
              interface. Quickly locate and access specific notes whenever you need them.
            </Paragraph>
            <AboutItems>
              <AboutItem>
                <Text fontSize={17} fontWeight={700} color={textColor}>
                  Effortless Note Creation
                </Text>
              </AboutItem>
              <AboutItem>
                <Text fontSize={17} fontWeight={700} color={textColor}>
                  Categorize and Tag
                </Text>
              </AboutItem>
              <AboutItem>
                <Text fontSize={17} fontWeight={700} color={textColor}>
                  Rich Formatting Options
                </Text>
              </AboutItem>
            </AboutItems>
          </AboutSmall>
          <AboutSmall>
            <AboutTitleFlex>
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

              <Heading
                is='h2'
                lineHeight={1.25}
                fontSize={32}
                fontWeight={800}
                color={textColor}
                letterSpacing='-.003rem'
              >
                Manage bookmarks
              </Heading>
            </AboutTitleFlex>
            <Paragraph size={500} color={textMuted} marginTop={18} lineHeight={1.75}>
              Dash Directory offers a centralized platform to manage all your bookmarks. Say goodbye
              to scattered and disorganized bookmarks.
            </Paragraph>
            <AboutItems>
              <AboutItem>
                <Text fontSize={17} fontWeight={700} color={textColor}>
                  Centralized Bookmark Management
                </Text>
              </AboutItem>
              <AboutItem>
                <Text fontSize={17} fontWeight={700} color={textColor}>
                  Filtering functionality
                </Text>
              </AboutItem>
              <AboutItem>
                <Text fontSize={17} fontWeight={700} color={textColor}>
                  Fast search query
                </Text>
              </AboutItem>
            </AboutItems>
          </AboutSmall>
        </AboutFlex>
        <AboutFull>
          <AboutTitleFlex>
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

            <Heading
              is='h2'
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing='-.003rem'
            >
              Organize your daily tasks
            </Heading>
          </AboutTitleFlex>

          <Paragraph size={500} color={textMuted} marginTop={18} lineHeight={1.75}>
            Dash Directory serves as your ultimate productivity companion, enabling you to
            efficiently manage and prioritize your daily tasks. Our user-friendly interface ensures
            that you can focus on what truly matters. Stay organized and make the most out of your
            time with Dash Directory.
          </Paragraph>
        </AboutFull>
      </ContainerWrap>

      <ContainerWrap>
        <Animation theme={theme} currentUser={currentUser} />
      </ContainerWrap>
    </AboutWrap>
  );
}

export default About;

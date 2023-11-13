import React from "react";
import {
  StartMenuWrap,
  StartMenuItem,
  StartMenuLogo,
  StartMenuTitle,
} from "../styles/components/startmenu";
import { Heading, Paragraph, Text } from "evergreen-ui";

function StartMenu({ theme }) {
  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";
  return (
    <div>
      <StartMenuWrap>
        <StartMenuItem>
          <StartMenuTitle>
            <StartMenuLogo>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={textColor}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </StartMenuLogo>
            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing="-.003rem"
            >
              Bookmarks
            </Heading>
          </StartMenuTitle>

          <Paragraph
            size={500}
            color={textMuted}
            marginTop={18}
            lineHeight={1.75}
          >
            Organize your internet life. Save and categorize your favorite
            website links, making it easy to revisit and stay connected with
            what matters most to you.
          </Paragraph>
        </StartMenuItem>
        <StartMenuItem>
          <StartMenuTitle>
            <StartMenuLogo>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={textColor}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </StartMenuLogo>
            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing="-.003rem"
            >
              Tasks
            </Heading>
          </StartMenuTitle>

          <Paragraph
            size={500}
            color={textMuted}
            marginTop={18}
            lineHeight={1.75}
          >
            Boost your productivity. Manage your to-do list efficiently, keeping
            track of tasks and ensuring you stay on top of your day.
          </Paragraph>
        </StartMenuItem>
        <StartMenuItem>
          <StartMenuTitle>
            <StartMenuLogo>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={textColor}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </StartMenuLogo>
            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing="-.003rem"
            >
              Events
            </Heading>
          </StartMenuTitle>

          <Paragraph
            size={500}
            color={textMuted}
            marginTop={18}
            lineHeight={1.75}
          >
            Never miss a beat. Stay up-to-date on your schedule by keeping track
            of upcoming dates and events, ensuring you are always in the right
            place at the right time.
          </Paragraph>
        </StartMenuItem>
        <StartMenuItem>
          <StartMenuTitle>
            <StartMenuLogo>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={textColor}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </StartMenuLogo>
            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={textColor}
              letterSpacing="-.003rem"
            >
              Notes
            </Heading>
          </StartMenuTitle>

          <Paragraph
            size={500}
            color={textMuted}
            marginTop={18}
            lineHeight={1.75}
          >
            Your personal notepad. Capture and store important information,
            quick thoughts, or creative ideas, all in one convenient place.
          </Paragraph>
        </StartMenuItem>
      </StartMenuWrap>
    </div>
  );
}

export default StartMenu;

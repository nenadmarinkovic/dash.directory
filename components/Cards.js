import React from "react";
import {
  CardsWrap,
  CardsFlex,
  CardsTitle,
  CardTitleFlex,
  CardsSmall,
  CardsFull,
  CardItems,
  CardItem,
} from "../styles/components/cards";
import { Heading, Paragraph, Text } from "evergreen-ui";
import { ContainerWrap } from "@/styles/components/layout";
import { Circle, Line } from "@/styles/components/helpers";

function Cards({ theme }) {
  let bw = theme === "light" ? "#000" : "#FFF";
  return (
    <CardsWrap>
      <ContainerWrap>
        <CardsTitle>
          <Line />
          <Circle>1</Circle>
          <Heading
            is="h2"
            marginTop={8}
            lineHeight={1.25}
            fontSize={38}
            marginBottom={8}
            fontWeight={900}
            color={bw}
            letterSpacing="-.003rem"
            textAlign="center"
          >
            We’ll help you get started
          </Heading>

          <Paragraph
            size={500}
            color="muted"
            marginTop={18}
            lineHeight={1.75}
            textAlign="center"
          >
            Dash Directory is a powerful online platform designed to simplify
            your digital life. A clean and distraction-free environment enhances
            your web experience.
          </Paragraph>
        </CardsTitle>
        <CardsFlex>
          <CardsSmall>
            <CardTitleFlex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke={bw}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <Heading
                is="h2"
                lineHeight={1.25}
                fontSize={32}
                fontWeight={800}
                color={bw}
                letterSpacing="-.003rem"
              >
                Organize notes
              </Heading>
            </CardTitleFlex>

            <Paragraph
              size={500}
              color="muted"
              marginTop={18}
              lineHeight={1.75}
            >
              Dash Directory is a powerful online platform designed to simplify
              your digital life. A clean and distraction-free environment
              enhances your web experience.
            </Paragraph>
            <CardItems>
              <CardItem>
                <Text fontSize={17} fontWeight={700} color={bw}>
                  Organize notes
                </Text>
              </CardItem>
              <CardItem>
                <Text fontSize={17} fontWeight={700} color={bw}>
                  Save bookmarks
                </Text>
              </CardItem>
              <CardItem>
                <Text fontSize={17} fontWeight={700} color={bw}>
                  Schedule events
                </Text>
              </CardItem>
            </CardItems>
          </CardsSmall>
          <CardsSmall>
            <CardTitleFlex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke={bw}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>

              <Heading
                is="h2"
                lineHeight={1.25}
                fontSize={32}
                fontWeight={800}
                color={bw}
                letterSpacing="-.003rem"
              >
                Menage bookmarks
              </Heading>
            </CardTitleFlex>
            <Paragraph
              size={500}
              color="muted"
              marginTop={18}
              lineHeight={1.75}
            >
              Dash Directory is a powerful online platform designed to simplify
              your digital life. A clean and distraction-free environment
              enhances your web experience.
            </Paragraph>
            <CardItems>
              <CardItem>
                <Text fontSize={17} fontWeight={700} color={bw}>
                  Organize notes
                </Text>
              </CardItem>
              <CardItem>
                <Text fontSize={17} fontWeight={700} color={bw}>
                  Save bookmarks
                </Text>
              </CardItem>
              <CardItem>
                <Text fontSize={17} fontWeight={700} color={bw}>
                  Schedule events
                </Text>
              </CardItem>
            </CardItems>
          </CardsSmall>
        </CardsFlex>
        <CardsFull>
          <CardTitleFlex>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke={bw}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>

            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={32}
              fontWeight={800}
              color={bw}
              letterSpacing="-.003rem"
            >
              Stay on top of your daily tasks
            </Heading>
          </CardTitleFlex>

          <Paragraph
            size={500}
            color="muted"
            marginTop={18}
            lineHeight={1.75}
            width={"50%"}
          >
            Dash Directory is a powerful online platform designed to simplify
            your digital life. A clean and distraction-free environment enhances
            your web experience.
          </Paragraph>
        </CardsFull>
      </ContainerWrap>
    </CardsWrap>
  );
}

export default Cards;

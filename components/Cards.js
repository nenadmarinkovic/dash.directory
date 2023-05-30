import React from "react";
import {
  CardsWrap,
  CardsFlex,
  CardsTitle,
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
            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={32}
              marginBottom={8}
              fontWeight={800}
              color={bw}
              letterSpacing="-.003rem"
            >
              Organize notes
            </Heading>
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
            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={32}
              marginBottom={8}
              fontWeight={800}
              color={bw}
              letterSpacing="-.003rem"
            >
              Menage bookmarks
            </Heading>
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
          <Heading
            is="h2"
            lineHeight={1.25}
            fontSize={32}
            marginBottom={8}
            fontWeight={800}
            color={bw}
            letterSpacing="-.003rem"
          >
            Stay on top of your daily tasks
          </Heading>
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

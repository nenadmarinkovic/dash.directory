import React from "react";
import {
  PanelWrap,
  PanelFlex,
  PanelTitle,
  PanelSmall,
  PanelFull,
} from "../styles/components/panel";
import { Heading, Paragraph } from "evergreen-ui";
import { ContainerWrap } from "@/styles/components/layout";
import { Circle, Line } from "@/styles/components/helpers";

function Panel({ theme }) {
  return (
    <PanelWrap>
      <ContainerWrap>
        <PanelTitle>
          <Line />
          <Circle>1</Circle>
          <Heading
            is="h2"
            marginTop={8}
            lineHeight={1.25}
            fontSize={38}
            marginBottom={8}
            fontWeight={900}
            color={theme === "light" ? "black" : "white"}
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
        </PanelTitle>
        <PanelFlex>
          <PanelSmall>
            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={38}
              marginBottom={8}
              fontWeight={800}
              color={theme === "light" ? "black" : "white"}
              letterSpacing="-.003rem"
            >
              Learn
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
          </PanelSmall>
          <PanelSmall>
            <Heading
              is="h2"
              lineHeight={1.25}
              fontSize={38}
              marginBottom={8}
              fontWeight={800}
              color={theme === "light" ? "black" : "white"}
              letterSpacing="-.003rem"
            >
              Learn
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
          </PanelSmall>
        </PanelFlex>
        <PanelFull>
          <Heading
            is="h2"
            lineHeight={1.25}
            fontSize={38}
            marginBottom={8}
            fontWeight={800}
            color={theme === "light" ? "black" : "white"}
            letterSpacing="-.003rem"
          >
            Learn
          </Heading>
          <Paragraph size={500} color="muted" marginTop={18} lineHeight={1.75}>
            Dash Directory is a powerful online platform designed to simplify
            your digital life. A clean and distraction-free environment enhances
            your web experience.
          </Paragraph>
        </PanelFull>
      </ContainerWrap>
    </PanelWrap>
  );
}

export default Panel;

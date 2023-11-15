import React from "react";
import {
  PricingCards,
  PricingCard,
  PricingCardItem,
  PricingAdditional,
  Money,
} from "../styles/components/pricing";
import { Heading, Paragraph, Text } from "evergreen-ui";
import { ContainerWrap } from "../styles/components/layout";
import Title from "./Title";
import Link from "next/link";
import { useThemeColors } from "../styles/theme";

function Pricing({ theme }) {
  const { textColor, textMuted } = useThemeColors(theme);

  return (
    <ContainerWrap>
      <Title title="Pricing" id="pricing" />
      <PricingCards>
        <PricingCard>
          <Heading
            is="h4"
            lineHeight={1.25}
            fontSize={28}
            marginBottom={8}
            fontWeight={900}
            color={textColor}
            letterSpacing="-.003rem"
          >
            Free forever
          </Heading>
          <Money>€ 0</Money>
          <Text marginTop={16} color={textMuted}>
            Access to basic features without any charge.
          </Text>
          <PricingCardItem>
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text color={textMuted}>
              {" "}
              Enjoy the benefits of Dash Directory without any cost
            </Text>
          </PricingCardItem>
          <PricingCardItem>
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text color={textMuted}>
              Task and event management functionalities
            </Text>
          </PricingCardItem>
          <PricingCardItem>
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
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <Text color={textMuted}>
              Priority customer support for prompt assistance
            </Text>
          </PricingCardItem>
        </PricingCard>
        <PricingCard>
          <Heading
            is="h4"
            lineHeight={1.25}
            fontSize={28}
            marginBottom={8}
            fontWeight={900}
            color={textColor}
            letterSpacing="-.003rem"
          >
            Support
          </Heading>
          <Money>
            € 5{" "}
            <Text color={textMuted} fontSize={18}>
              / month
            </Text>
          </Money>

          <Text marginTop={16} color={textMuted}>
            Get additional features and premium support.
          </Text>
          <PricingCardItem>
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text color={textMuted}>
              Enjoy the benefits of Dash Directory without any cost
            </Text>
          </PricingCardItem>
          <PricingCardItem>
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text color={textMuted}>
              Task and event management functionalities
            </Text>
          </PricingCardItem>
          <PricingCardItem>
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text color={textMuted}>
              Priority customer support for prompt assistance
            </Text>
          </PricingCardItem>
        </PricingCard>
      </PricingCards>
      <PricingAdditional>
        <Heading
          is="h4"
          lineHeight={1.25}
          fontSize={28}
          marginBottom={8}
          fontWeight={900}
          color={textColor}
          letterSpacing="-.003rem"
          textAlign="center"
        >
          Updates
        </Heading>

        <Paragraph
          size={500}
          color={textMuted}
          marginTop={18}
          lineHeight={1.75}
          textAlign="center"
        >
          The Updates page keeps users informed about the latest features,
          improvements, and announcements related to Dash Directory, ensuring
          they stay up to date with the platform&apos;s developments.
        </Paragraph>
        <br />
        <Link href="/updates">See updates</Link>
      </PricingAdditional>
    </ContainerWrap>
  );
}

export default Pricing;

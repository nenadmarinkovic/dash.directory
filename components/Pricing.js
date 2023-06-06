import React from "react";
import {
  PricingCards,
  PricingCard,
  PricingCardItem,
  PricingAdditional,
  Money,
} from "../styles/components/pricing";
import { Button, Heading, Paragraph, Text } from "evergreen-ui";
import { ContainerWrap } from "@/styles/components/layout";

import Title from "./Title";
import Link from "next/link";

function Pricing({ theme }) {
  let bw = theme === "light" ? "#000" : "#FFF";

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
            color={bw}
            letterSpacing="-.003rem"
          >
            Free forever
          </Heading>
          <Money>€ 0</Money>
          <Text marginTop={16}>
            Dash Directory is your ultimate productivity companion, empowering
            you to stay focused and make the most out of your time.
          </Text>
          <PricingCardItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={bw}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text>Deploy from CLI or personal git</Text>
          </PricingCardItem>
          <PricingCardItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={bw}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text>Deploy from CLI or personal git</Text>
          </PricingCardItem>
          <PricingCardItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={bw}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text>Deploy from CLI or personal git</Text>
          </PricingCardItem>
        </PricingCard>
        <PricingCard>
          <Heading
            is="h4"
            lineHeight={1.25}
            fontSize={28}
            marginBottom={8}
            fontWeight={900}
            color={bw}
            letterSpacing="-.003rem"
          >
            Support
          </Heading>
          <Money>
            € 5 <Text fontSize={18}>/ month</Text>
          </Money>

          <Text marginTop={16}>
            Dash Directory is your ultimate productivity companion, empowering
            you to stay focused and make the most out of your time.
          </Text>
          <PricingCardItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={bw}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text>Deploy from CLI or personal git</Text>
          </PricingCardItem>
          <PricingCardItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={bw}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text>Deploy from CLI or personal git</Text>
          </PricingCardItem>
          <PricingCardItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={bw}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <Text>Deploy from CLI or personal git</Text>
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
          color={bw}
          letterSpacing="-.003rem"
          textAlign="center"
        >
          Updates
        </Heading>

        <Paragraph
          size={500}
          color="muted"
          marginTop={18}
          lineHeight={1.75}
          textAlign="center"
        >
          Dash Directory is designed to help you boost your focus and
          productivity. Here&apos;s a short text highlighting how our platform
          can support you in achieving your goals:
        </Paragraph>
        <Button fontSize={14} appearance="minimal" marginTop={15}>
          <Link href="/updates">See updates</Link>
        </Button>
      </PricingAdditional>
    </ContainerWrap>
  );
}

export default Pricing;

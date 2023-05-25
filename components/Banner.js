import React from "react";
import {
  BannerWrap,
  BannerItem,
  BannerText,
} from "../styles/components/banner";
import { ContainerWrap } from "../styles/components/layout";
import { Button, Heading, Paragraph } from "evergreen-ui";

function Banner({ theme }) {
  return (
    <ContainerWrap>
      <BannerWrap>
        <BannerItem>
          <BannerText>
            <Heading
              is="h1"
              marginTop={8}
              lineHeight={1.25}
              fontSize={58}
              marginBottom={8}
              fontWeight={900}
              color={theme === "light" ? "black" : "white"}
              letterSpacing="-.003rem"
            >
              Web directory for organized minds
            </Heading>
            <Paragraph
              size={500}
              color="muted"
              marginTop={18}
              lineHeight={1.75}
            >
              Dash Directory is a powerful online platform designed to simplify
              your digital life. A clean and distraction-free environment
              enhances your web experience, reduces your cognitive load, and
              enables you to organize your notes, manage bookmarks, and stay on
              top of your daily tasks.
            </Paragraph>
            <Button
              appearance="neutral"
              fontWeight="bold"
              width={100}
              marginTop={25}
            >
              Learn more
            </Button>
          </BannerText>
        </BannerItem>
        <BannerItem>
          <svg
            width="812"
            height="591"
            viewBox="0 0 812 591"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Logo Banner">
              <g id="part3">
                <path
                  d="M421.921 254.138L421.73 310.897V370.179V367.497L145.615 528.445L147.311 413.636L421.921 254.138Z"
                  fill="url(#paint0_linear_6_249)"
                />
                <path
                  d="M421.926 254.14L147.316 413.638L98.4648 385.45L146.55 357.517L372.501 226.143L373.012 225.888L421.926 254.14Z"
                  fill={theme === "light" ? "black" : "white"}
                />
              </g>
              <g id="part2">
                <path
                  d="M372.688 169.447L372.497 226.142L146.547 357.516L146.738 300.757L372.688 169.447Z"
                  fill="url(#paint1_linear_6_249)"
                />
                <path
                  d="M616.884 254.138L568.288 282.39L342.338 413.7L293.423 385.448L421.736 310.896L519.374 254.138L372.694 169.446L146.744 300.756L97.8291 272.505L323.779 141.195L371.865 113.198L372.375 112.943L421.29 141.195L568.033 225.886L616.884 254.138Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  d="M616.892 254.139L616.764 310.898L616.892 367.498L342.346 526.53V413.701L568.296 282.391L616.892 254.139Z"
                  fill="url(#paint2_linear_6_249)"
                />
              </g>
              <g id="part1">
                <path
                  d="M372.048 56.441L371.857 113.2L323.772 141.196L97.8204 272.507L97.6291 336.153L48.5869 364.66L48.9058 244.255L372.048 56.441Z"
                  fill="url(#paint3_linear_6_249)"
                />
                <path
                  d="M811.904 254.138L763.309 282.39L440.167 470.14L391.252 441.888L568.161 339.085L616.756 310.897L714.394 254.138L372.056 56.4398L48.9145 244.254L0 216.066L323.142 28.188L371.737 0L420.588 28.188L762.99 225.887L811.904 254.138Z"
                  fill={theme === "light" ? "black" : "white"}
                />
                <path
                  d="M811.904 254.139L811.521 374.544L762.989 402.796L439.783 590.61L440.166 470.141L763.308 282.391L811.904 254.139Z"
                  fill="url(#paint4_linear_6_249)"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_6_249"
                x1="284.457"
                y1="254.138"
                x2="284.457"
                y2="534.105"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D5D5D5" />
                <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_6_249"
                x1="259.618"
                y1="169.447"
                x2="259.618"
                y2="357.516"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D5D5D5" />
                <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_6_249"
                x1="479.619"
                y1="254.139"
                x2="479.619"
                y2="526.53"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D5D5D5" />
                <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_6_249"
                x1="210.318"
                y1="56.441"
                x2="210.318"
                y2="364.66"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D5D5D5" />
                <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_6_249"
                x1="625.844"
                y1="254.139"
                x2="625.844"
                y2="590.61"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D5D5D5" />
                <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </BannerItem>
      </BannerWrap>
    </ContainerWrap>
  );
}

export default Banner;

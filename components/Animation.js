import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { throttle } from "throttle-debounce-ts";
import { useEffect, useRef, useState } from "react";
import { AboutTitle } from "../styles/components/about";
import { Button, Heading, Paragraph, Text } from "evergreen-ui";
import { Circle, Line } from "@/styles/components/helpers";
import Link from "next/link";

function useElementViewportPosition(ref) {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, [ref]);

  return { position };
}

export default function Animation({ theme }) {
  let bw = theme === "light" ? "#000" : "#FFF";

  const slideAnimation = {
    transition: { duration: 0 },
    initial: "partial",
    whileInView: "full",
    viewport: { amount: 1, once: true },
  };

  const ref = useRef(null);
  const carouselRef = useRef(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          parent.offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section ref={ref}>
        <div className="container" style={{ height: "320vh" }}>
          <div className="sticky-wrapper">
            <AboutTitle>
              <Line />
              <Circle>2</Circle>
              <Heading
                is="h2"
                marginTop={8}
                lineHeight={1.25}
                fontSize={38}
                color={bw}
                marginBottom={8}
                fontWeight={900}
                letterSpacing="-.003rem"
                textAlign="center"
              >
                Keep your focus on what is important
              </Heading>

              <Paragraph
                size={500}
                color="muted"
                marginTop={18}
                lineHeight={1.75}
                textAlign="center"
              >
                Dash Directory is designed to help you boost your focus and
                productivity. Here&apos;s a short text highlighting how our
                platform can support you in achieving your goals:
              </Paragraph>
            </AboutTitle>
            <motion.div ref={carouselRef} className="carousel" style={{ x }}>
              {Array.from(Array(8).keys()).map((i, index) => (
                <motion.div
                  {...slideAnimation}
                  key={i}
                  className="carousel-slide"
                >
                  {index === 0 ? (
                    <div className="carousel-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                        />
                      </svg>
                      <Heading
                        is="h4"
                        marginTop={8}
                        lineHeight={1.25}
                        fontSize={23}
                        color={bw}
                        fontWeight={900}
                        letterSpacing="-.003rem"
                        textAlign="center"
                      >
                        Distraction-free environment
                      </Heading>
                      <Text>
                        Utilize Dash Directory&apos;s clean and clutter-free
                        interface to create a distraction-free zone for your
                        work.
                      </Text>
                    </div>
                  ) : index === 1 ? (
                    <div className="carousel-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                        />
                      </svg>

                      <Heading
                        is="h4"
                        marginTop={8}
                        lineHeight={1.25}
                        fontSize={23}
                        color={bw}
                        fontWeight={900}
                        letterSpacing="-.003rem"
                        textAlign="center"
                      >
                        Task Prioritization
                      </Heading>
                      <Text>
                        Utilize Dash Directory&apos;s clean and clutter-free
                        interface to create a distraction-free zone for your
                        work.
                      </Text>
                    </div>
                  ) : index === 2 ? (
                    <div className="carousel-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>

                      <Heading
                        is="h4"
                        marginTop={8}
                        lineHeight={1.25}
                        fontSize={23}
                        color={bw}
                        fontWeight={900}
                        letterSpacing="-.003rem"
                        textAlign="center"
                      >
                        Search functionality
                      </Heading>
                      <Text>
                        Utilize Dash Directory&apos;s clean and clutter-free
                        interface to create a distraction-free zone for your
                        work.
                      </Text>
                    </div>
                  ) : index === 3 ? (
                    <div className="carousel-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                        />
                      </svg>
                      <Heading
                        is="h4"
                        marginTop={8}
                        lineHeight={1.25}
                        fontSize={23}
                        color={bw}
                        fontWeight={900}
                        letterSpacing="-.003rem"
                        textAlign="center"
                      >
                        Distraction-free environment
                      </Heading>
                      <Text>
                        Utilize Dash Directory&apos;s clean and clutter-free
                        interface to create a distraction-free zone for your
                        work.
                      </Text>
                    </div>
                  ) : index === 4 ? (
                    <div className="carousel-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                        />
                      </svg>

                      <Heading
                        is="h4"
                        marginTop={8}
                        lineHeight={1.25}
                        fontSize={23}
                        color={bw}
                        fontWeight={900}
                        letterSpacing="-.003rem"
                        textAlign="center"
                      >
                        Customized Workspace
                      </Heading>
                      <Text>
                        Utilize Dash Directory&apos;s clean and clutter-free
                        interface to create a distraction-free zone for your
                        work.
                      </Text>
                    </div>
                  ) : index === 5 ? (
                    <div className="carousel-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                        />
                      </svg>
                      <Heading
                        is="h4"
                        marginTop={8}
                        lineHeight={1.25}
                        fontSize={23}
                        color={bw}
                        fontWeight={900}
                        letterSpacing="-.003rem"
                        textAlign="center"
                      >
                        Distraction-free environment
                      </Heading>
                      <Text>
                        Utilize Dash Directory&apos;s clean and clutter-free
                        interface to create a distraction-free zone for your
                        work.
                      </Text>
                    </div>
                  ) : index === 6 ? (
                    <div className="carousel-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                        />
                      </svg>
                      <Heading
                        is="h4"
                        marginTop={8}
                        lineHeight={1.25}
                        fontSize={23}
                        color={bw}
                        fontWeight={900}
                        letterSpacing="-.003rem"
                        textAlign="center"
                      >
                        Distraction-free environment
                      </Heading>
                      <Text>
                        Utilize Dash Directory&apos;s clean and clutter-free
                        interface to create a distraction-free zone for your
                        work.
                      </Text>
                    </div>
                  ) : index === 7 ? (
                    <div className="carousel-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                        />
                      </svg>
                      <Heading
                        is="h4"
                        marginTop={8}
                        lineHeight={1.25}
                        fontSize={23}
                        color={bw}
                        fontWeight={900}
                        letterSpacing="-.003rem"
                        textAlign="center"
                      >
                        Distraction-free environment
                      </Heading>
                      <Text>
                        Utilize Dash Directory&apos;s clean and clutter-free
                        interface to create a distraction-free zone for your
                        work.
                      </Text>
                    </div>
                  ) : (
                    <div>0</div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            <AboutTitle>
              <Line />
              <Circle>3</Circle>
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
                Create your profile now
              </Heading>

              <Paragraph
                size={500}
                color="muted"
                marginTop={18}
                lineHeight={1.75}
                textAlign="center"
              >
                Dash Directory is designed to help you boost your focus and
                productivity. Here&apos;s a short text highlighting how our
                platform can support you in achieving your goals:
              </Paragraph>
              <Link href="/signup">
                <Button className="themed-button" marginTop={15} width={120}>
                  Sign up
                </Button>
              </Link>
            </AboutTitle>
          </div>
        </div>
      </section>
    </div>
  );
}

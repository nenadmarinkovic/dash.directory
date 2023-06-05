import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { throttle } from "throttle-debounce-ts";
import { useEffect, useRef, useState } from "react";
import { AboutTitle } from "../styles/components/about";
import { Heading, Paragraph, Text } from "evergreen-ui";
import { Circle, Line } from "@/styles/components/helpers";

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
    variants: {
      full: { backgroundColor: theme === "light" ? "#FBFBFB" : "#000" },
      partial: { backgroundColor: theme === "light" ? "#FBFBFB" : "#000" },
    },
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
        <div className="container" style={{ height: "300vh" }}>
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
                We’ll help you to stay efficient
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
                 {
                 index === 0 ?  <div>1</div> :
                 index === 1 ?  <div>2</div> :
                 index === 2 ?  <div>3</div> :
                 index === 3 ?  <div>4</div> :
                 index === 4 ?  <div>5</div> :
                 index === 5 ?  <div>6</div> :
                 index === 6 ?  <div>7</div> :
                 index === 7 ?  <div>8</div> :
                 <div>0</div>
                }
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

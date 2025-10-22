"use client";

import { Brain, Trophy, Users } from "lucide-react";
import hrSummit1 from "@/assets/hr_summit/WhatsApp Image 2025-10-06 at 11.24.31.jpeg";
import hrSummit3 from "@/assets/hr_summit/1759481576972.jpeg";
import {
  motion,
  MotionValue,
  transform,
  useScroll,
  useTransform,
} from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";

const FULL_ARTICLE_URL =
  "https://www.rrhhdigital.com/secciones/eventos-rrhhdigital/781586/hr-innovation-summit-2025-mas-talento-mas-ideas-y-una-asistencia-record/";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

const AwardsSection = () => {
  const refContainer = useRef(null);
  const refMotionContainer = useRef(null);
  const [motionContainerWidth, setMotionContainerWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: refContainer,
  });
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const x = useParallax(scrollYProgress, -motionContainerWidth + screenWidth);

  useLayoutEffect(() => {
    setMotionContainerWidth(refMotionContainer.current.offsetWidth);
  }, []);

  return (
    <section
      ref={refContainer}
      className="w-full relative"
      style={{
        height: motionContainerWidth
          ? `${motionContainerWidth - screenWidth}px`
          : "auto",
      }}
    >
      <div className="sticky top-0 overflow-hidden h-screen">
        <motion.div
          className="h-full w-fit flex flex-row justify-start items-center"
          style={{ x }}
          ref={refMotionContainer}
        >
          <div className="w-screen text-center flex flex-col items-center justify-center">
            <motion.h2
              className="font-heading font-bold text-4xl md:text-6xl text-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            >
              Winner, HR Innovation Summit
            </motion.h2>
            <motion.h3
              className="font-heading font-bold text-5xl md:text-8xl text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            >
              Startup of the Year
            </motion.h3>
          </div>

          {/* Partners */}
          <div
            className="text-center mr-56"
            style={{ width: `${screenWidth / 1.5}px` }}
          >
            <div className="text-center space-y-6">
              <div className="flex flex-col items-center justify-center gap-8 flex-wrap">
                <div className="flex flex-row gap-8">
                  <div className="w-80 h-56 bg-primary/10 rounded-xl p-8 shadow-card text-center flex flex-col items-start justify-between gap-5">
                    <div className="inline-flex items-center gap-2 py-2 rounded-full">
                      <Brain className="h-10 w-10 text-primary" />
                    </div>
                    <span className="text-md font-heading font-medium text-primary uppercase tracking-wider">
                      Built by scientists
                    </span>
                  </div>
                  <div className="w-80 h-56 bg-primary/10 rounded-xl p-8 shadow-card text-center flex flex-col items-start justify-between gap-5">
                    <div className="inline-flex items-center gap-2 py-2 rounded-full">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <span className="text-md font-heading font-medium text-primary uppercase tracking-wider">
                      Scaled by industry experts
                    </span>
                  </div>
                </div>
                <p className="text-3xl text-muted-foreground max-w-2xl mx-auto">
                  Recognized for innovation in talent assessment and workforce
                  intelligence
                </p>
                <a
                  href={FULL_ARTICLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[22rem] h-8 inline-block underline text-2xl text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline mt-4"
                >
                  <span className="absolute left-0 top-0 underline">
                    Read the full announcement
                  </span>{" "}
                  <motion.span
                    className="absolute right-0"
                    initial={{ transform: "translateX(0px)" }}
                    animate={{ transform: "translateX(8px)" }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    →
                  </motion.span>
                </a>
              </div>
            </div>
          </div>

          {/* Award Photos Grid */}
          <div className="h-screen w-screen max-w-6xl text-center flex flex-col justify-center items-center mr-56">
            <div className="h-screen grid grid-cols-3 grid-rows-2 gap-12 pt-32 pb-24">
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <img
                  src={hrSummit3}
                  alt="HR Innovation Summit 2025 - Wiselook presentation"
                  className="w-full h-full object-cover shadow-card"
                  loading="lazy"
                />
                <div className="absolute bottom-0 h-9 w-full flex items-center justify-center bg-black/50">
                  <div className="text-white">
                    <p className="text-sm font-medium">
                      Presenting Wiselook's vision
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative rounded-xl overflow-hidden row-start-2 col-start-2">
                <img
                  src={hrSummit1}
                  alt="HR Innovation Summit 2025 - Wiselook team receiving award"
                  className="w-full h-full object-cover shadow-card"
                  loading="lazy"
                />
                <div className="absolute bottom-0 h-9 w-full flex items-center justify-center bg-black/50">
                  <div className="text-white">
                    <p className="text-sm font-medium">
                      HR Innovation Summit 2025 - Startup of the Year
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 rounded-xl p-8 shadow-card text-center flex flex-col items-start justify-between gap-5 row-start-1 col-start-3">
                <div className="inline-flex items-center gap-2 py-2 rounded-full">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <span className="text-4xl font-heading font-medium text-primary uppercase tracking-wider">
                  Award Winner
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { AwardsSection };

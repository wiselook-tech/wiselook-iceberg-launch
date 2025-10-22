"use server";

import { motion } from "motion/react";

const ProblemSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 scroll-mt-20 bg-[#fafafa]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem Content */}
            <div className="space-y-6">
              <motion.h2
                className="relative font-heading font-bold text-3xl md:text-4xl text-foreground"
                initial={{ left: -150, opacity: 0 }}
                whileInView={{ left: 0, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Go beyond multiple‑choice tests and expensive executive
                assessments
              </motion.h2>
              <motion.p
                className="relative text-lg text-muted-foreground"
                initial={{ left: -150, opacity: 0 }}
                whileInView={{ left: 0, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
              >
                We unlock real measurement of talent across your organization.
                It's time to see the whole picture.
              </motion.p>
            </div>

            {/* Interactive Pyramid Card Stack */}
            <div className="w-80 flex flex-col justify-center text-center mx-auto">
              {/* Top Card - Execs */}
              <motion.div
                className="relative bg-secondary/5 border-t border-b border-r border-l rounded-t-lg border-gray-400 px-6 py-8"
                initial={{ bottom: -150, opacity: 0 }}
                whileInView={{ bottom: 0, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-primary h-12 w-fit px-4 rounded-lg bg-secondary/30 flex items-center justify-center mx-auto mb-3">
                  Execs
                </h3>
                <div className="">
                  <p className="text-sm sm:text-base text-gray-600">
                    Human Skills get tested
                  </p>
                  <p className="text-xs sm:text-sm leading-1 text-gray-500">
                    Leadership level
                  </p>
                </div>
              </motion.div>

              {/* Middle Card - Best of Workforce */}
              <motion.div
                className="relative bg-secondary/15 border-b border-r border-l border-gray-400 px-6 py-8"
                initial={{ bottom: -150, opacity: 0 }}
                whileInView={{ bottom: 0, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-primary h-12 w-fit px-4 rounded-lg bg-secondary/30 flex items-center justify-center mx-auto mb-3">
                  Best of Workforce
                </h3>
                <div className="">
                  <p className="text-sm sm:text-base text-gray-600">
                    Human Skills get debated
                  </p>
                  <p className="text-xs sm:text-sm leading-1 text-gray-500">
                    Rising talent
                  </p>
                </div>
              </motion.div>

              {/* Bottom Card - Line Workers */}
              <motion.div
                className="relative bg-secondary/25 border-b border-r border-l rounded-b-lg border-gray-400 px-6 py-8"
                initial={{ bottom: -150, opacity: 0 }}
                whileInView={{ bottom: 0, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-primary h-12 w-fit px-4 rounded-lg bg-secondary/30 flex items-center justify-center mx-auto mb-3">
                  Line Workers
                </h3>
                <div className="">
                  <p className="text-sm sm:text-base text-gray-600">
                    Foundation of the workforce
                  </p>
                  <p className="text-xs sm:text-sm leading-1 text-gray-500">
                    Where potential begins
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProblemSection };

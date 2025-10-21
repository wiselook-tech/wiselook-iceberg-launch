"use server";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem Content */}
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Go beyond multiple‑choice tests and expensive executive
                assessments
              </h2>
              <p className="text-lg text-muted-foreground">
                We unlock real measurement of talent across your organization.
                It's time to see the whole picture.
              </p>
            </div>

            {/* Interactive Pyramid Card Stack */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-end justify-center group/pyramid transform transition-all duration-500 ease-out">
                {/* Bottom Card - Line Workers */}
                <div
                  className="absolute bottom-0 w-80 h-24 sm:w-96 sm:h-28 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:-translate-y-4 transform cursor-pointer animate-slide-up group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group-hover/pyramid:!scale-105 group-hover/pyramid:!shadow-xl group-hover/pyramid:!-translate-y-2"
                  role="button"
                  tabIndex={0}
                  aria-label="Line Workers - Foundation of the workforce where potential begins"
                >
                  <div className="relative py-3 sm:py-4 h-full flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-1 group-hover:text-gray-900 transition-all duration-300 transform translate-y-0 group-hover:-translate-y-6">
                      Line Workers
                    </h3>
                    <div className="absolute w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-2">
                      <p className="text-sm sm:text-base text-gray-600 leading-1 text-center group-hover:text-gray-700 transition-colors">
                        Foundation of the workforce
                      </p>
                      <p className="text-xs sm:text-sm leading-1 text-gray-500 text-center">
                        Where potential begins
                      </p>
                    </div>
                  </div>
                </div>

                {/* Middle Card - Best of Workforce */}
                <div
                  className="absolute bottom-16 sm:bottom-20 w-60 h-20 sm:w-72 sm:h-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-lg transition-all duration-500 ease-out cursor-pointer animate-slide-in-left group group-hover/pyramid:!scale-105 group-hover/pyramid:!shadow-xl group-hover/pyramid:!-translate-y-[55px]"
                  style={{ animationDelay: "300ms" }}
                  role="button"
                  tabIndex={0}
                  aria-label="Best of Workforce - Rising talent where human skills get debated"
                >
                  <div className="relative py-3 sm:py-4 h-full flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-white text-center mb-1 group-hover:text-orange-100 transition-all duration-300 transform translate-y-0 group-hover:-translate-y-6">
                      Best of Workforce
                    </h3>
                    <div className="absolute w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-2">
                      <p className="text-sm sm:text-base text-orange-100 leading-1 text-center group-hover:text-orange-50 transition-colors">
                        Human Skills get debated
                      </p>
                      <p className="text-xs text-orange-200 text-center">
                        Rising talent
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Card - Execs */}
                <div
                  className="absolute bottom-32 sm:bottom-36 w-36 h-20 sm:w-44 sm:h-24 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg shadow-lg transition-all duration-500 ease-out cursor-pointer animate-slide-down group group-hover/pyramid:!scale-105 group-hover/pyramid:!shadow-xl group-hover/pyramid:!-translate-y-[100px]"
                  style={{ animationDelay: "600ms" }}
                  role="button"
                  tabIndex={0}
                  aria-label="Executives - Leadership level where human skills get tested"
                >
                  <div className="relative py-3 sm:py-4 h-full flex flex-col justify-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-white text-center mb-1 group-hover:text-blue-100 transition-all duration-300 transform translate-y-0 group-hover:-translate-y-6">
                      Execs
                    </h3>
                    <div className="absolute w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-2">
                      <p className="text-xs sm:text-sm text-blue-100 leading-1 text-center group-hover:text-blue-50 transition-colors">
                        Human Skills get tested
                      </p>
                      <p className="text-xs text-blue-200 text-center">
                        Leadership level
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProblemSection };

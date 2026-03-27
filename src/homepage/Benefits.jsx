import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../animations/variants";

function Benefits() {
  return (
    <section id="benefits">
      <div className="px-4 sm:px-6 md:px-12 py-24">
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="caption text-[#485c11] mb-2">Benefits</p>

          <h2 className="h1 mt-12 mb-4">We’ve cracked the code.</h2>

          <p className="p text-[#6f6f6f] max-w-md mt-12 mb-15">
            Area provides real insights, without the data overload.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
              <div className="h-px bg-gray-300 mb-6"></div>

              <div className="mb-4">
                <img src="/cable.svg" alt="icon" className="w-6 h-6" />
              </div>

              <h3 className="h3 mb-2">Amplify Insights</h3>

              <p className="p text-[#6f6f6f]">
                Unlock data-driven decisions with comprehensive analytics,
                revealing key opportunities for strategic regional growth.
              </p>
            </motion.div>

            <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
              <div className="h-px bg-gray-300 mb-6"></div>

              <div className="mb-4">
                <img src="/earth.svg" alt="icon" className="w-6 h-6" />
              </div>

              <h3 className="h3 mb-2">Control Your Global Presence</h3>

              <p className="p text-[#6f6f6f]">
                Manage and track satellite offices, ensuring consistent
                performance and streamlined operations everywhere.
              </p>
            </motion.div>

            <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
              <div className="h-px bg-gray-300 mb-6"></div>

              <div className="mb-4">
                <img src="/account.svg" alt="icon" className="w-6 h-6" />
              </div>

              <h3 className="h3 mb-2">Remove Language Barriers</h3>

              <p className="p text-[#6f6f6f]">
                Adapt to diverse markets with built-in localization for clear
                communication and enhanced user experience.
              </p>
            </motion.div>

            <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
              <div className="h-px bg-gray-300 mb-6"></div>

              <div className="mb-4">
                <img src="/growth.svg" alt="icon" className="w-6 h-6" />
              </div>

              <h3 className="h3 mb-2">Visualize Growth</h3>

              <p className="p text-[#6f6f6f]">
                Generate precise, visually compelling reports that illustrate
                your growth trajectories across all regions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-30"
          >
            <img src="/mountain.jpg" className="w-full rounded-3xl" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" mx-auto mt-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="h-full w-full">
            <div className="h-px bg-gray-300 mt-10"></div>
            <h2 className="h1 mt-20 mb-4">See the Big Picture</h2>

            <p className="p text-[#6f6f6f] mb-6">
              Area turns your data into clear, vibrant visuals that show you
              exactly what's happening in each region.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b border-t mt-10 border-gray-300 py-5">
                <span className="text-[#6f6f6f] p">01</span>
                <p className="p">
                  Spot Trends in Seconds: No more digging through numbers.
                </p>
              </div>

              <div className="flex items-start gap-4 border-b border-gray-300 py-5">
                <span className="text-[#6f6f6f] p">02</span>
                <p className="p">
                  Get Everyone on the Same Page: Share easy-to-understand
                  reports with your team.
                </p>
              </div>

              <div className="flex items-start gap-4 border-b border-gray-300 py-5">
                <span className="text-[#6f6f6f] p">03</span>
                <p className="p">
                  Make Presentations Pop: Interactive maps and dashboards keep
                  your audience engaged.
                </p>
              </div>

              <div className="flex items-start gap-4 border-gray-300 py-5">
                <span className="text-[#6f6f6f] p">04</span>
                <p className="p">
                  Your Global Snapshot: Get a quick, clear overview of your
                  entire operation.
                </p>
              </div>
            </div>

            <button className="p font-bold mt-6 px-5 py-5 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer">
              Discover More
            </button>
          </div>

          <div className=" rounded-3xl object-contain h-220 flex justify-center">
            <img src="/cylinders.jpg" className="rounded-3xl" />
          </div>
        </motion.div>
        <div className="h-px bg-gray-300 mt-20"></div>
      </div>
    </section>
  );
}

export default Benefits;

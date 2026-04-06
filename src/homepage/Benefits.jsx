import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../animations/variants";

function Benefits() {
  return (
    <section id="benefits">
      <div className="px-4 sm:px-6 md:px-12 py-16 sm:py-24">
        {/* TOP SECTION */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="caption text-[#485c11] mb-2">Benefits</p>

          <h2 className="h1 mt-8 sm:mt-12 mb-4">We’ve cracked the code.</h2>

          <p className="p text-[#6f6f6f] max-w-md sm:max-w-lg mt-6 sm:mt-10 mb-10 sm:mb-14">
            Area provides real insights, without the data overload.
          </p>

          {/* GRID */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "/cable.svg",
                title: "Amplify Insights",
                text: "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
              },
              {
                icon: "/earth.svg",
                title: "Control Your Global Presence",
                text: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
              },
              {
                icon: "/account.svg",
                title: "Remove Language Barriers",
                text: "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
              },
              {
                icon: "/growth.svg",
                title: "Visualize Growth",
                text: "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                transition={{ duration: 0.5 }}
              >
                <div className="h-px bg-gray-300 mb-6"></div>

                <div className="mb-4">
                  <img src={item.icon} alt="icon" className="w-6 h-6" />
                </div>

                <h3 className="h3 mb-2">{item.title}</h3>

                <p className="p text-[#6f6f6f]">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 sm:mt-24"
          >
            <img
              src="/mountain.jpg"
              className="w-full rounded-3xl object-cover md:h-200 h-175"
            />
          </motion.div>
        </motion.div>

        {/* SECOND SECTION */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* TEXT */}
          <div className="w-full">
            <div className="h-px bg-gray-300 "></div>

            <h2 className="h1 mt-10 sm:mt-20 mb-4">See the Big Picture</h2>

            <p className="p text-[#6f6f6f] mb-6">
              Area turns your data into clear, vibrant visuals that show you
              exactly what's happening in each region.
            </p>

            <div className="space-y-4">
              {[
                "Spot Trends in Seconds: No more digging through numbers.",
                "Get Everyone on the Same Page: Share easy-to-understand reports with your team.",
                "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
                "Your Global Snapshot: Get a quick, clear overview of your entire operation.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-gray-300 py-4"
                >
                  <span className="text-[#6f6f6f]">{`0${index + 1}`}</span>
                  <p className="p">{text}</p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <button className="w-full sm:w-auto mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-[#dfecc6] text-black rounded-full font-bold hover:text-white hover:bg-[#485C11] transition">
              Discover More
            </button>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center">
            <img
              src="/cylinders.jpg"
              className="rounded-3xl w-full h-125 md:h-200 object-cover"
            />
          </div>
        </motion.div>

        <div className="h-px bg-gray-300 mt-16 sm:mt-20"></div>
      </div>
    </section>
  );
}

export default Benefits;

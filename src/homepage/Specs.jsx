import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../animations/variants";

const Cell = ({ ok, text, muted }) => (
  <div
    className={`flex items-center gap-2 p-3 sm:p-4 ${
      muted ? "text-gray-500" : ""
    }`}
  >
    <img
      src={ok ? "/check.svg" : "/cross.svg"}
      alt=""
      className="w-4 h-4 shrink-0 mt-0.5 opacity-70"
    />
    <span className="text-sm sm:text-base">{text}</span>
  </div>
);

function Specs() {
  return (
    <section id="specs">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 sm:px-6 md:px-12 py-16 sm:py-24"
      >
        {/* HEADER */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="caption text-[#485C11] mb-4">Specs</h2>

          <h1 className="h1 mb-6">Why Choose Area?</h1>

          <p className="p text-[#6f6f6f] mb-8 sm:mb-10">
            You need a solution that keeps up. That’s why we developed Area. A
            developer-friendly approach to streamline your business.
          </p>

          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#dfecc6] text-black rounded-full font-bold hover:bg-[#485C11] hover:text-white transition">
            Discover More
          </button>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 sm:mt-20 border border-gray-200 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* HEADER */}
              <div className="grid grid-cols-3 text-center border-b border-gray-400">
                <div className="p-4 font-medium text-lg sm:text-xl bg-white">
                  Area
                </div>
                <div className="p-4 font-medium text-lg sm:text-xl text-gray-500">
                  WebSurge
                </div>
                <div className="p-4 font-medium text-lg sm:text-xl text-gray-500">
                  HyperView
                </div>
              </div>

              {/* ROWS */}
              {[
                ["Ultra-fast browsing", "Fast browsing", "Moderate speeds"],
                [
                  "Advanced AI insights",
                  "Basic AI recommendations",
                  "No AI assistance",
                ],
                [
                  "Seamless integrations",
                  "Basic customization",
                  "Steep learning curve",
                ],
                [
                  "Advanced AI insights",
                  "Basic AI insights",
                  "No AI assistance",
                ],
                ["Ultra-fast browsing", "Fast browsing", "Moderate speeds"],
                [
                  "Full UTF-8 support",
                  "Potential display errors",
                  "Partial UTF-8 support",
                ],
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-b border-gray-200"
                >
                  <Cell ok text={row[0]} />
                  <Cell ok={i !== 3 && i !== 5} text={row[1]} muted />
                  <Cell ok={false} text={row[2]} muted />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM SECTION */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* IMAGE */}
          <div>
            <img
              src="/stone.jpg"
              alt="visual"
              className="w-full max-h-[400px] sm:max-h-[500px] object-cover rounded-3xl"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="h2 leading-relaxed mb-6">
              “I was skeptical, but Area has completely transformed the way I
              manage my business. The data visualizations are so clear and
              intuitive, and the platform is so easy to use. I can't imagine
              running my company without it.”
            </p>

            <p className="p">John Smith</p>
            <p className="caption text-[#485C11]">Head of Data</p>
          </div>
        </motion.div>

        <div className="h-px bg-gray-300 mt-16 sm:mt-20"></div>
      </motion.div>
    </section>
  );
}

export default Specs;

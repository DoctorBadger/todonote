import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../animations/variants";

const Cell = ({ ok, text, muted }) => (
  <div
    className={`flex items-center gap-2 p-4 ${muted ? "text-gray-500" : ""}`}
  >
    <img
      src={ok ? "/check.svg" : "/cross.svg"}
      alt=""
      className="w-4 h-4 shrink-0 mt-0.5 opacity-70"
    />
    <span>{text}</span>
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
        className="px-12 py-24"
      >
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="caption text-[#485C11] mb-4">Specs</h2>

          <h1 className="h1 mb-6">Why Choose Area?</h1>

          <p className="p text-[#6f6f6f] mb-10">
            You need a solution that keeps up. That’s why we developed Area. A
            developer-friendly approach to streamline your business.
          </p>

          <button className="p font-bold px-6 py-3 bg-[#dfecc6] text-black rounded-full hover:bg-[#485C11] hover:text-white transition cursor-pointer">
            Discover More
          </button>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="px-12 mt-20 border border-gray-200 rounded-2xl overflow-hidden"
        >
          <div className="py-5 grid grid-cols-3 text-center border-b border-gray-400">
            <div
              style={{ fontFamily: "DM Sans" }}
              className="p-4 font-medium text-xl bg-white"
            >
              Area
            </div>
            <div
              style={{ fontFamily: "DM Sans" }}
              className="p-4 font-medium text-xl text-gray-500"
            >
              WebSurge
            </div>
            <div
              style={{ fontFamily: "DM Sans" }}
              className="p-4 font-medium text-xl text-gray-500"
            >
              HyperView
            </div>
          </div>
          <div>
            <div className="py-5 caption grid grid-cols-3 border-b border-gray-200">
              <Cell ok text="Ultra-fast browsing" />
              <Cell ok text="Fast browsing" muted />
              <Cell ok={false} text="Moderate speeds" muted />
            </div>

            <div className="py-5 caption grid grid-cols-3 border-b border-gray-200">
              <Cell ok text="Advanced AI insights" />
              <Cell ok text="Basic AI recommendations" muted />
              <Cell ok={false} text="No AI assistance" muted />
            </div>

            <div className="py-5 caption grid grid-cols-3 border-b border-gray-200">
              <Cell ok text="Seamless integrations" />
              <Cell ok text="Basic customization" muted />
              <Cell ok={false} text="Steep learning curve" muted />
            </div>

            <div className="py-5 caption grid grid-cols-3 border-b border-gray-200">
              <Cell ok text="Advanced AI insights" />
              <Cell ok={false} text="Basic AI insights" muted />
              <Cell ok={false} text="No AI assistance" muted />
            </div>

            <div className="py-5 caption grid grid-cols-3 border-b border-gray-200">
              <Cell ok text="Ultra-fast browsing" />
              <Cell ok text="Fast browsing" muted />
              <Cell ok={false} text="Moderate speeds" muted />
            </div>

            <div className="py-5 caption grid grid-cols-3 ">
              <Cell ok text="Full UTF-8 support" />
              <Cell ok={false} text="Potential display errors" muted />
              <Cell ok={false} text="Partial UTF-8 support" muted />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=" mx-auto mt-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="/stone.jpg"
              alt="visual"
              className=" h-200 w-full object-cover rounded-3xl"
            />
          </div>

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
        <div className="h-px bg-gray-300 mt-20"></div>
      </motion.div>
    </section>
  );
}

export default Specs;

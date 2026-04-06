import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../animations/variants";

function How() {
  return (
    <section id="how">
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
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="h1 text-center sm:text-left">Map Your Success</p>

          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#dfecc6] text-black rounded-full font-bold hover:text-white hover:bg-[#485C11] transition">
            Discover More
          </button>
        </motion.div>

        <div className="h-px bg-gray-300 mt-10 sm:mt-20"></div>

        {/* STEPS */}
        <div
          className="grid grid-cols-3 overflow-x-auto gap-8 sm:gap-10 mt-10"
          style={{ fontFamily: "DM Sans" }}
        >
          {[
            {
              num: "01",
              title: "Get Started",
              text: "With our intuitive setup, you’re up and running in minutes.",
            },
            {
              num: "02",
              title: "Customize and Configure",
              text: "Adapt Area to your specific requirements and preferences.",
            },
            {
              num: "03",
              title: "Grow Your Business",
              text: "Make informed decisions to exceed your goals.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={slideUp}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#929292] text-3xl sm:text-5xl lg:text-6xl my-6 sm:my-10">
                {item.num}
              </p>

              <h3 className="h3 my-4 sm:my-6">{item.title}</h3>

              <p className="p text-[#6F6F6F]">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* IMAGE */}
        <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
          <img
            src="/landscape.jpg"
            className="rounded-3xl mt-12 sm:mt-16 w-full h-175 md:h-200 object-cover"
          />
        </motion.div>

        <div className="h-px bg-gray-300 mt-12 sm:mt-20"></div>
      </motion.div>
    </section>
  );
}

export default How;

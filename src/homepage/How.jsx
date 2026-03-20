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
        className=" px-12"
      >
        <motion.div
          variants={slideUp}
          transition={{ duration: 0.5 }}
          className="flex justify-between"
        >
          <p className="h1">Map Your Success</p>
          <button className="p font-bold mt-6 px-5 py-5 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer">
            Discover More
          </button>
        </motion.div>
        <div className="h-px bg-gray-300 mt-20"></div>
        <div
          style={{ fontFamily: "DM Sans", fontSize: "80px", lineHeight: 1 }}
          className="grid grid-cols-3"
        >
          <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
            <p className="text-[#929292] my-10">01</p>
            <h3 className="h3 my-10">Get Started</h3>
            <p className="p my-10 text-[#6F6F6F]">
              With our intuitive setup, you’re up and running in minutes.
            </p>
          </motion.div>
          <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
            <p className="text-[#929292] my-10">02</p>
            <h3 className="h3 my-10">Customize and Configure</h3>
            <p className="p my-10 text-[#6F6F6F]">
              Adapt Area to your specific requirements and preferences.
            </p>
          </motion.div>
          <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
            <p className="text-[#929292] my-10">03</p>
            <h3 className="h3 my-10">Grow Your Business</h3>
            <p className="p my-10 text-[#6F6F6F]">
              Make informed decisions to exceed your goals.
            </p>
          </motion.div>
        </div>
        <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
          <img
            src="/landscape.jpg"
            className="rounded-4xl mt-15 object-cover w-full h-200"
          />
        </motion.div>
        <div className="h-px bg-gray-300 mt-20"></div>
      </motion.div>
    </section>
  );
}

export default How;

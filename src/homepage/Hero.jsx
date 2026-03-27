import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "../animations/variants";
import LogosCarousel from "../components/LogosCarousel"

function Hero() {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="pt-35 px-4 sm:px-6 md:px-12 text-center"
    >
      <p className="display display text-[100px] sm:text-[70px] md:text-[110px] lg:text-[150px] leading-none tracking-tight flex-wrap justify-center">
        Browse everything.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mt-20 flex justify-center overflow-y-clip"
        >
          <div className="absolute bottom-0 w-11/12 h-100 bg-[#8D9B6A] rounded-[28px]"></div>
          <div className="relative z-10 w-240 bg-black rounded-[28px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] translate-y-17.5">
            <img src="/dashboard.png" className="w-full rounded-[20px] block" />
          </div>
        </motion.div>
      </motion.div>
      <div className="mt-20 text-left">
        <p className="text-[14px] text-[#6f6f6f] mb-5">Trusted by:</p>

        <div className="">
          <LogosCarousel/>
        </div>
      </div>
      <div className="h-px bg-gray-300 mt-20"></div>
    </motion.div>
  );
}
export default Hero;

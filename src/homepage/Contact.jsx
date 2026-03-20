import { motion } from "framer-motion";
import { slideUp } from "../animations/variants";
function Contact() {
  return (
    <section id="contact">
      <div className="pt-24 pb-12 px-12">
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="h1">Connect with us</h1>
          <p className="p text-[#6f6f6f] py-20">
            Schedule a quick call to learn how Area can turn your regional data
            into a powerful advantage.
          </p>
          <button className="p font-bold px-80 py-5 bg-[#485C11] text-white rounded-full hover:bg-[#dfecc6] hover:text-black transition cursor-pointer">
            Learn More
          </button>
        </motion.div>
        <div className="h-px bg-gray-300 mt-40"></div>
      </div>
    </section>
  );
}

export default Contact;

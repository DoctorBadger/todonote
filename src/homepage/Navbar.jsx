import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navbarAnim } from "../animations/variants";

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      variants={navbarAnim}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "pt-3 sm:pt-4" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between text-center transition-all duration-300 ${
          scrolled
            ? "-translate-y-full md:translate-y-0 bg-white/70 backdrop-blur-lg shadow-lg rounded-full border border-gray-200 px-4 sm:px-6 md:px-12 py-3 gap-6"
            : "w-full px-8 py-4"
        }`}
      >
        {/* LOGO */}
        {!scrolled && (
          <h1 className="p text-lg sm:text-2xl mr-4 md:mr-24">Area</h1>
        )}

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6">
          <a href="#benefits" className="link font-bold">
            Benefits
          </a>
          <a href="#specs" className="link font-bold">
            Specifications
          </a>
          <a href="#how" className="link font-bold">
            How-To
          </a>
          <a href="#contact" className="link font-bold">
            Contact Us
          </a>
        </div>

        {/* BUTTONS */}
        {!scrolled && (
          <div className=" sm:flex gap-2">
            <button
              className="p font-bold px-4 py-2 text-sm sm:text-base bg-[#dfecc6] rounded-full hover:text-white hover:bg-[#485C11]"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
            <button
              className="p font-bold px-4 py-2 text-sm sm:text-base bg-[#dfecc6] rounded-full hover:text-white hover:bg-[#485C11]"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"
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
    transition={{duration:0.4}}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-center ${
        scrolled ? "pt-4" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between text-center transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-lg shadow-lg rounded-full border border-gray-200 px-8 py-3 gap-6"
            : "w-full px-8 py-4"
        }`}
      >
        {!scrolled && <h1 className="p text-2xl mr-24">Area</h1>}

        <div className="flex gap-6">
          <a href="#benefits" className="link font-bold cursor-pointer">Benefits</a>
          <a href="#specs" className="link font-bold cursor-pointer">Specifications</a>
          <a href="#how" className="link font-bold cursor-pointer">How-To</a>
          <a href="#contact" className="link font-bold cursor-pointer">Contact Us</a>
        </div>

        {!scrolled && (
          <div className="flex gap-1">
            <button
              className="p font-bold mt-6 px-5 py-3 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
            <button
              className="p font-bold mt-6 px-5 py-3 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer"
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
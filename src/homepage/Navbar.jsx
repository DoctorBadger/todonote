import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navbarAnim } from "../animations/variants";

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      setShowMenu(false);
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
          <div className="hidden md:flex gap-2">
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

        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl font-bold"
          >
            {showMenu ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {showMenu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 w-[90%] max-w-sm bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col gap-5 md:hidden"
        >
          <a
            href="#benefits"
            className="font-semibold border-b pb-2"
            onClick={() => setShowMenu(false)}
          >
            Benefits
          </a>

          <a
            href="#specs"
            className="font-semibold border-b pb-2"
            onClick={() => setShowMenu(false)}
          >
            Specifications
          </a>

          <a
            href="#how"
            className="font-semibold border-b pb-2"
            onClick={() => setShowMenu(false)}
          >
            How-To
          </a>

          <a
            href="#contact"
            className="font-semibold"
            onClick={() => setShowMenu(false)}
          >
            Contact Us
          </a>

          {/* BUTTON */}


          {/* AUTH BUTTONS */}
          <div className="flex gap-2 mt-2">
            <button
              className="flex-1 px-4 py-2 bg-[#dfecc6] rounded-full hover:bg-[#485C11] hover:text-white transition"
              onClick={() => {
                setShowMenu(false);
                navigate("/signup");
              }}
            >
              Signup
            </button>

            <button
              className="flex-1 px-4 py-2 bg-[#dfecc6] rounded-full hover:bg-[#485C11] hover:text-white transition"
              onClick={() => {
                setShowMenu(false);
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Navbar;

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div
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
          <a className="link font-bold cursor-pointer">Benefits</a>
          <a className="link font-bold cursor-pointer">Specifications</a>
          <a className="link font-bold cursor-pointer">How-To</a>
          <a className="link font-bold cursor-pointer">Contact Us</a>
        </div>

        {!scrolled && (
          <div className="flex">
            <button
              className="link px-4 py-2 bg-[#485C11] text-white rounded-full mx-1 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
            <button
              className="link px-4 py-2 bg-[#485C11] text-white rounded-full mx-1 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
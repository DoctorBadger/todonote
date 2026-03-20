import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../homepage/Navbar";
import Hero from "../homepage/Hero";
import Benefits from "../homepage/Benefits";
import Specs from "../homepage/Specs";
import How from "../homepage/How";
import Contact from "../homepage/Contact";
import Footer from "../homepage/Footer";

function Home() {
  useEffect(() => {
    
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <Benefits />
      <Specs />
      <How />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default Home;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Counter from "./Counter";
import ImageStack from "./ImageStack";
import { useLoaderProgress } from "../../hooks/useLoaderProgress";
import logoBorderPng from "../../assets/king/logoBorderPng.png";

// import logo from "../../assets/king/Celeb.png";

const Loader = ({ onComplete }) => {
  const progress = useLoaderProgress(2500);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setExit(true), 500);
    }
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-[9999] overflow-hidden"
      animate={
        exit
          ? {
              y: "-100%",
              scale: 1.03,
            }
          : {}
      }
      transition={{
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (exit) onComplete();
      }}
    >
      {/* Counter */}
      <Counter progress={progress} />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Big background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Background Logo */}
          <motion.img
            src={logoBorderPng} // import your image
            alt="CELEPS"
            initial={{ opacity: 0 }}
            animate={{
              opacity: progress > 30 ? 0.8 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute z-[10] select-none pointer-events-none"
            style={{
              width: "clamp(400px, 80vw, 1200px)",
              filter: "brightness(0) invert(1)",
            }}
          />

          {/* Image stack */}
          <ImageStack progress={progress} />
        </div>

        {/* Image stack */}
        <ImageStack progress={progress} />
      </div>
    </motion.div>
  );
};

export default Loader;

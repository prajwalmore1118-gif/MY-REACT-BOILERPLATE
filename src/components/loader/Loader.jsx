import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Counter from "./Counter";
import ImageStack from "./ImageStack";
import { useLoaderProgress } from "../../hooks/useLoaderProgress";

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
        <motion.h1
          className="absolute z-[80] text-[100px] md:text-[220px] font-black tracking-tighter select-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: progress > 30 ? 1 : 0,
          }}
          style={{
            color: "transparent",
            WebkitTextStroke: "3px #ffffff",
          }}
        >
          CELEB
        </motion.h1>

        {/* Image stack */}
        <ImageStack progress={progress} />

      </div>
    </motion.div>
  );
};

export default Loader;

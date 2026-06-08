import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 4);
      mouseY.set(e.clientY - 4);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[99999]"
      style={{
        x,
        y,
      }}
    />
  );
};

export default Cursor;
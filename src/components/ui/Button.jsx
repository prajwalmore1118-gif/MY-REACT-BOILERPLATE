import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  // base styles (shared)
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed";

  // variants (extend as needed later)
  const variants = {
    primary: "bg-black text-white hover:scale-[1.03] overflow-hidden rounded-full",
    outline: "border border-black text-black hover:bg-black hover:text-white rounded-xl",
    ghost: "text-black hover:bg-black/5 rounded-lg",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* button content */}
      <span className="relative z-10 px-6 py-3 text-sm md:text-base tracking-wide">{children}</span>

      {/* hover glow effect only for primary */}
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
      )}
    </motion.button>
  );
};

export default Button;

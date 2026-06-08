import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-5xl"
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.15}
        scale={1.02}
        perspective={2000}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        transitionSpeed={2000}
      >
        <div className="relative overflow-hidden rounded-[40px] border border-yellow-500/10 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

          <div className="grid items-center gap-16 p-4 md:grid-cols-[1.1fr_0.9fr] md:p-16 lg:p-12">

            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <span className="text-sm uppercase tracking-[6px] text-yellow-400">
                Limited Edition
              </span>

              <h2 className="mt-5 text-5xl font-black leading-none text-white md:text-7xl">
                KING
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
                Premium oversized t-shirt featuring the iconic KING artwork.
                Crafted for bold personalities, creators, leaders and
                trendsetters who aren't afraid to stand out.
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "240 GSM",
                  "Oversized Fit",
                  "Premium Cotton",
                  "HD Print",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-zinc-700 bg-white/[0.02] px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <div>
                  <p className="text-sm text-zinc-500">
                    Starting From
                  </p>

                  <h4 className="text-4xl font-black text-white">
                    ₹{product.price}
                  </h4>
                </div>

                <Button
                  className="shadow-[0_20px_60px_rgba(234,179,8,0.25)]"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex items-center justify-center">

              {/* Aura Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
                className="absolute h-[320px] w-[320px] rounded-full border border-yellow-500/20 md:h-[450px] md:w-[450px]"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear",
                }}
                className="absolute h-[250px] w-[250px] rounded-full border border-yellow-500/10 md:h-[550px] md:w-[550px]"
              />

              {/* Product Image */}
              <motion.img
                src={product.image}
                alt={product.name}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="relative z-20 w-full max-w-[420px] object-contain drop-shadow-[0_60px_100px_rgba(0,0,0,0.8)]"
              />

              {/* Shine */}
              <motion.div
                animate={{
                  x: ["-150%", "250%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProductCard;
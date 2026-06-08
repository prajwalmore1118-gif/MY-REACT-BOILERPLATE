import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import productImage from "../../assets/king/heroPng.png";

const ProductSection = () => {
  const product = {
    id: 1,
    name: "KING",
    image: productImage,
    price: 999,
  };

  return (
    <section className="relative overflow-hidden bg-[#080808] py-16 lg:py-24">

      {/* ── SVG Noise Grain Overlay ── */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* ── Diagonal Spotlight Beams ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left beam */}
        <motion.div
          animate={{ opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-0 h-full w-[500px] origin-top-left -rotate-12 bg-gradient-to-b from-yellow-400/20 via-yellow-400/5 to-transparent blur-[2px]"
        />
        {/* Right beam */}
        <motion.div
          animate={{ opacity: [0.05, 0.02, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -right-32 top-0 h-full w-[400px] origin-top-right rotate-12 bg-gradient-to-b from-yellow-400/15 via-yellow-400/5 to-transparent blur-[2px]"
        />
      </div>

      {/* ── Radial Center Glow (deep amber core) ── */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.06] blur-[120px]" />

      {/* ── Scattered Micro Dots ── */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { top: "12%", left: "8%", delay: 0 },
          { top: "72%", left: "6%", delay: 1.2 },
          { top: "25%", right: "10%", delay: 0.5 },
          { top: "80%", right: "8%", delay: 2 },
          { top: "45%", left: "3%", delay: 1.8 },
          { top: "55%", right: "4%", delay: 0.8 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: dot.delay }}
            className="absolute h-1 w-1 rounded-full bg-yellow-400"
            style={{ top: dot.top, left: dot.left, right: dot.right }}
          />
        ))}
      </div>

      {/* ── Watermark Text ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="select-none text-[20vw] font-black uppercase leading-none text-white/[0.025] tracking-widest">
          KING
        </h1>
      </div>

      {/* ── Horizontal Rule Lines ── */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-12 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[5px] text-yellow-300">
            Premium Collection
          </span>
        </motion.div>

        <ProductCard product={product} />
      </div>
    </section>
  );
};

export default ProductSection;
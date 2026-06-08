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
    <section className="relative overflow-hidden bg-black/95 py-16 lg:py-12">
      {/* Background text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-[18vw] font-black uppercase text-white/[0.03]">
          KING
        </h1>
      </div>

      {/* Premium Collection */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[5px] text-yellow-400">
            Premium Collection
          </span>
        </motion.div>

        <ProductCard product={product} />
      </div>
    </section>
  );
};

export default ProductSection;
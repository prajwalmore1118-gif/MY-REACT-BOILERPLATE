import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="h-screen flex items-center justify-center">Product not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);

  return (
    <div className="w-full bg-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[950px]">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* LEFT: Media Section */}
          <div className="w-full lg:w-[50%]">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#fafafa]">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-[240px] sm:h-[300px] lg:h-[460px] w-full object-contain p-2"
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all bg-[#fafafa] ${
                    selectedImage === img ? "border-black" : "border-gray-200"
                  }`}
                >
                  <img src={img} alt="" className="h-[74px] w-[74px] object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="w-full lg:w-[50%]">
            {/* Category */}
            <span className="text-xs uppercase tracking-[4px] text-gray-500">
              Premium Streetwear
            </span>

            {/* Title */}
            <h1 className="mt-1 text-[28px] lg:text-[32px] font-black leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-2 flex items-center gap-3">
              <span className="text-2xl lg:text-3xl font-black">₹{product.price}</span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                In Stock
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-gray-500">
              Premium oversized t-shirt crafted from heavyweight cotton with high-definition
              artwork. Designed for comfort, durability and everyday style.
            </p>

            {/* Feature Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["240 GSM", "Oversized Fit", "100% Cotton", "HD Print"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Color Selector */}
            <div className="mt-4">
              <h2 className="mb-1.5 text-sm font-semibold">Color</h2>

              <button
                onClick={() => setSelectedColor(product.colors[0])}
                className="flex h-[48px] w-full items-center justify-between rounded-xl border bg-[#fafafa] px-4"
              >
                <span className="text-sm">{selectedColor}</span>
                <div className="h-4 w-4 rounded-full bg-black" />
              </button>
            </div>

            {/* Size Selector */}
            <div className="mt-4">
              <h2 className="mb-2 text-sm font-semibold">Select Size</h2>

              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-[42px] rounded-xl border text-sm font-medium transition-all ${
                      selectedSize === size ? "bg-black text-white" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4">
              <h2 className="mb-2 text-sm font-semibold">Quantity</h2>

              <div className="flex h-[46px] w-[130px] items-center justify-between rounded-xl border px-3">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="text-lg font-medium"
                >
                  −
                </button>

                <span className="text-sm font-semibold">{quantity}</span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="text-lg font-medium"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons: Clean side-by-side split layout */}
            <div className="mt-6 flex flex-row gap-3">
              <button className="flex-1 h-[50px] rounded-xl bg-black text-white font-medium text-sm transition hover:opacity-90">
                Add To Cart
              </button>

              <button className="flex-1 h-[50px] rounded-xl border border-black font-medium text-sm transition hover:bg-black hover:text-white">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

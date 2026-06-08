import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import logo from "../assets/king/blacklogo-Photoroom.png";
import Navbar from "../components/Navbar";
import ProductCard from "../components/products/ProductCard";
import bannerImage from "../assets/king/bannerImage.png";
import PhilosophyReveal from "../components/PhilosophyReveal";
import ProductSection from "../components/products/ProductSection";

const Home = () => {
  const { scrollY } = useScroll();

  // Hero reveal animation
  const heroY = useTransform(scrollY, [0, 1000], [0, -1000]);
  const heroScale = useTransform(scrollY, [0, 1000], [1, 0.9]);
  const heroOpacity = useTransform(scrollY, [0, 1000], [1, 0]);

  const isTouchDevice =
    typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 15,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 15,
  });

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    mouseX.set((xPos - rect.width / 2) * 0.08);
    mouseY.set((yPos - rect.height / 2) * 0.08);
  };

  const featuredProduct = {
    id: 1,
    name: "Premium Oversized T-Shirt",
    price: "₹999",
    image: bannerImage,
    badge: "New Arrival",
  };

  return (
    <motion.main
      className="relative bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />

      {/* Hero Layer */}
      <div className="relative z-20 h-[100vh]">
        <motion.section
          style={{
            y: heroY,
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="sticky top-0 h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-8"
          onMouseMove={handleMouseMove}
        >
          {/* Huge Background Words */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <h1 className="absolute top-16 left-4 md:left-12 text-[18vw] font-black text-black/[0.13] uppercase leading-none">
              Style
            </h1>

            <h1 className="absolute bottom-16 right-4 md:right-12 text-[18vw] font-black text-black/[0.13] uppercase leading-none">
              Fashion
            </h1>
          </div>

          {/* Bottom Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:block absolute left-10 lg:left-20 bottom-24 lg:bottom-32 z-10"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-black/40 mb-4">Modern Fashion</p>

            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight max-w-[320px]">
              Crafted For
              <br />
              Everyday Icons
            </h2>
          </motion.div>

          {/* Top Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:block absolute right-10 lg:right-20 top-28 lg:top-36 text-right z-10"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-black/40 mb-4">
              Premium Streetwear
            </p>

            <h2 className="text-2xl lg:text-4xl font-semibold leading-tight">
              New Collection
              <br />
              2026
            </h2>
          </motion.div>

          {/* Mobile Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:hidden absolute top-[18%] left-1/2 -translate-x-1/2 text-center z-10"
          >
            <p className="text-[10px] tracking-[0.35em] uppercase text-black/40 mb-3">
              Premium Clothing Brand
            </p>

            <h2 className="text-2xl font-semibold leading-tight">
              Fashion That
              <br />
              Defines You
            </h2>
          </motion.div>

          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.05] blur-3xl"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Floating Logo */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 1.2, 0, -1.2, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={logo}
              alt="Celeb"
              style={!isTouchDevice ? { x, y } : {}}
              className="relative z-10 w-[280px] sm:w-[380px] md:w-[550px] lg:w-[750px] xl:w-[950px] 2xl:w-[1100px] select-none"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              draggable={false}
            />
          </motion.div>

          {/* Bottom Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
          >
            <p className="uppercase tracking-[0.5em] text-[11px] sm:text-xs text-black/50 whitespace-nowrap">
              Wear Your Attitude
            </p>
          </motion.div>
        </motion.section>
      </div>

      {/* IMPORTANT: normal flow section */}
      <PhilosophyReveal />

      {/* Product Section */}
      <ProductSection product={featuredProduct} />
    </motion.main>
  );
};

export default Home;

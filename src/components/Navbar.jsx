import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiOutlineMenuAlt3, HiOutlineShoppingBag, HiX } from "react-icons/hi";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { FaXTwitter } from "react-icons/fa6";

import logo from "../assets/king/blacklogo-Photoroom.png";
import Button from "./ui/Button";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Collections", path: "/collections" },
  { name: "Journal", path: "/journal" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartCount = 2;

  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
        }}
        className="fixed top-0 left-0 w-full z-[999]"
      >
        <div className="mx-2 sm:mx-3 mt-2">
          <div
            className="
              h-[58px]
              sm:h-[52px]
              border
              border-gray-600/60
              rounded-lg
              backdrop-blur-xl
              flex
              items-center
              justify-between
              px-3
              sm:px-5
              lg:px-8
              relative
              shadow-[0_0_25px_rgba(255,255,255,0.05)]
            "
          >
            {/* LEFT MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="
                text-black
                hover:text-orange-400
                cursor-pointer
                transition-all
                duration-300
                z-10
              "
            >
              <HiOutlineMenuAlt3 size={28} />
            </button>

            {/* CENTER LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt="Celeb" className="h-7 sm:h-8 md:h-10 object-contain" />
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="
                  relative
                  h-9
                  w-9
                  sm:h-10
                  sm:w-10
                  flex
                  items-center
                  justify-center
                  text-black
                  hover:cursor-pointer
                  transition-all
                "
              >
                <FiShoppingCart size={20} />

                {cartCount > 0 && (
                  <span
                    className="
                      absolute
                      -top-2
                      -right-2
                      h-5
                      min-w-[20px]
                      px-1
                      rounded-full
                      bg-zinc-700
                      text-white
                      text-[10px]
                      font-semibold
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                bg-black/50
                backdrop-blur-md
                z-[1000]
              "
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                top-1
                left-1
                h-[calc(100vh-8px)]
                w-[85vw]
                sm:w-[320px]
                max-w-[320px]
                z-[1001]
                rounded-lg
                flex
                flex-col
              "
            >
              {/* TOP */}
              <div className="flex items-center justify-between p-5 sm:p-6 bg-black border border-gray-800 rounded-lg">
                <h2 className="text-white tracking-[0.3em] uppercase text-xs">Menu</h2>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-orange-400"
                >
                  <HiX size={26} />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="mt-1 mb-1 flex-1 px-6 sm:px-8 pt-8 sm:pt-10 bg-black border border-gray-800 rounded-lg">
                <div className="flex flex-col gap-6 sm:gap-8">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      onClick={() => {
                        navigate(item.path);
                        setIsOpen(false);
                      }}
                      className="
                        text-left
                        text-white
                        uppercase
                        tracking-[0.2em]
                        text-sm
                        sm:text-base
                        cursor-pointer
                        hover:text-orange-400
                        transition-all
                        duration-300
                      "
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="bg-black border border-gray-800 p-5 sm:p-6 rounded-lg">
                <div className="flex justify-center gap-5 sm:gap-6">
                  <a
                    href="#"
                    className="text-white cursor-pointer hover:text-orange-400 transition"
                  >
                    <FaInstagram size={20} />
                  </a>

                  <a href="#" className="text-white hover:text-orange-400 transition">
                    <FaFacebookF size={18} />
                  </a>

                  <a href="#" className="text-white hover:text-orange-400 transition">
                    <FaXTwitter size={18} />
                  </a>

                  <a href="#" className="text-white hover:text-orange-400 transition">
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

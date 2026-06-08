import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612215327100-60fc5c4d7938?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559697242-a465f2578a95?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const rotations = [-8, -4, 0, 4, 8];

const ImageStack = ({ progress }) => {
  const visibleCount = Math.floor((progress / 100) * images.length);

  return (
    <div className="relative w-[320px] h-[420px] flex items-center justify-center">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          className="absolute w-[240px] h-[320px] object-cover shadow-2xl select-none pointer-events-none"
          style={{
            rotate: rotations[index],
            zIndex: index,
          }}
          initial={{
            opacity: 0,
            scale: 0.6,
            y: 60,
          }}
          animate={
            visibleCount > index
              ? {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  scale: 0.6,
                  y: 60,
                }
          }
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
          }}
        />
      ))}
    </div>
  );
};

export default ImageStack;
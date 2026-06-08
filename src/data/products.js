import bannerImage from "../assets/king/bannerImage.png";
import productImage1 from "../assets/king/productImage1.jpeg";
import productImage2 from "../assets/king/productImage2.jpeg";
import productImage3 from "../assets/king/productImage3.jpeg";
import productImage4 from "../assets/king/productImage4.png";

export const products = [
  {
    id: 1,
    name: "Premium Oversized T-Shirt",
    price: "999",
    image: bannerImage,
    badge: "New Arrival",

    images: [productImage1, productImage2, productImage3, productImage4],

    colors: ["Black"],
    sizes: ["S", "M", "L"],
  },
];
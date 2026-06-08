import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
import Cursor from "./components/cursor/Cursor";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  return (
    <>
      {!isTouchDevice && <Cursor />}

      {!loadingDone && (
        <Loader onComplete={() => setLoadingDone(true)} />
      )}

      {loadingDone && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      )}
    </>
  );
}

export default App;
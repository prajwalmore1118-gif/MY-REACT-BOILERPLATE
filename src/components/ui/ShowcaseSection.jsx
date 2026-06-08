import "./ShowcaseSection.css";
import { useEffect, useRef, useState } from "react";

import front from "../../assets/clothe1.jpeg";
import back from "../../assets/clothe2.jpeg";
import left from "../../assets/clothe3.jpeg";
import right from "../../assets/clothe4.jpeg";

const features = [
  {
    title: "women casuals",
    image: front,
    description:
      "Made from carefully selected fabrics for maximum comfort and durability.",
  },
  {
    title: "women casuals",
    image: back,
    description:
      "Exclusive designs released in limited quantities for a unique look.",
  },
  {
    title: "Mens tshirts",
    image: left,
    description:
      "A fresh collection crafted to redefine everyday streetwear.",
  },
  {
    title: "Mens tshirts",
    image: right,
    description:
      "Timeless pieces designed for style, comfort, and confidence.",
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const rafRef = useRef(null);

  const [scrollPhase, setScrollPhase] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollStart = sectionTop;
      const scrollEnd = sectionTop + sectionHeight - viewportHeight;

      const currentScroll = window.scrollY;

      const progress = Math.min(
        1,
        Math.max(0, (currentScroll - scrollStart) / (scrollEnd - scrollStart))
      );

      const phase = progress * (features.length - 1);

      setScrollPhase(phase);
      setActive(Math.round(phase));
    };

    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        updateScroll();
        rafRef.current = null;
      });
    };

    updateScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScroll);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleNavClick = (index) => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.offsetTop;
    const scrollableHeight = section.offsetHeight - window.innerHeight;
    const safeScrollableHeight = Math.max(0, scrollableHeight - 4);

    const targetScroll =
      sectionTop + (index / (features.length - 1)) * safeScrollableHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const getCardStyle = (index) => {
    const diff = index - scrollPhase;

   let slideDistance = 58;

if (window.innerWidth <= 1024 && window.innerWidth > 768) {
  slideDistance = 35;
}

if (window.innerWidth <= 480) {
  slideDistance = 50;
}

const translateX = diff * slideDistance;

    const opacity =
      diff < -0.65
        ? 0
        : diff > 1.35
        ? 0
        : diff > 0
        ? 1 - diff * 0.35
        : 1 + diff * 0.85;

    const blur = Math.min(Math.abs(diff) * 8, 12);
    const scale = 1 - Math.min(Math.abs(diff) * 0.04, 0.08);

    return {
      transform: `translate3d(${translateX}%, 0, 0) scale(${scale})`,
      opacity,
      filter: `blur(${blur}px)`,
      zIndex: 10 - Math.abs(Math.round(diff)),
    };
  };

  const activeButton = Math.round(scrollPhase);

  return (
    <section
      className="mira-showcase"
      ref={sectionRef}
      style={{ "--items-count": features.length }}
    >
      <div className="mira-showcase__sticky">
        <div className="mira-showcase__left">
          <h2>
            MENS AND 
            <br />
            WOMENS CLOTHING
            <br />
            ARE LAUNCHING SOON!
          </h2>
        </div>

        <div className="mira-showcase__right">
          <div className="mira-feature-stage">
            {features.map((item, index) => (
              <article
                key={item.title}
                className={`mira-feature-card ${
                  active === index ? "is-active" : ""
                }`}
                style={getCardStyle(index)}
              >
                <div className="mira-card-image-wrap">
                  <img src={item.image} alt={item.title} />
                </div>

                <h3>{item.title}</h3>
              </article>
            ))}
          </div>

          <div className="mira-feature-copy" key={active}>
            <p>{features[active].description}</p>
          </div>

          <div className="mira-slider-nav">
            <div className="mira-nav-line">
              <span
                className="mira-nav-progress"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, (scrollPhase / (features.length - 1)) * 100)
                  )}%`,
                }}
              />
            </div>

            <div className="mira-nav-buttons">
              {features.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={`mira-nav-btn ${
                    activeButton === index ? "active" : ""
                  }`}
                  onClick={() => handleNavClick(index)}
                  aria-label={`Show ${item.title}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import "./ShowcaseSection.css";
import { useEffect, useState } from "react";

import front from "../../assets/clothe1.jpeg";
import back from "../../assets/clothe2.jpeg";
import left from "../../assets/clothe3.jpeg";
import right from "../../assets/clothe4.jpeg";

const features = [
  {
    title: "Women Casuals",
    image: front,
    description:
      "Made from carefully selected fabrics for maximum comfort and durability.",
  },
  {
    title: "Women Casuals",
    image: back,
    description:
      "Exclusive designs released in limited quantities for a unique look.",
  },
  {
    title: "Mens Tshirts",
    image: left,
    description:
      "A fresh collection crafted to redefine everyday streetwear.",
  },
  {
    title: "Mens Tshirts",
    image: right,
    description:
      "Timeless pieces designed for style, comfort, and confidence.",
  },
];

export default function ShowcaseSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 1000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (index) => {
    setActive(index);
  };

  const getCardStyle = (index) => {
    const diff = index - active;

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

  return (
    <section className="mira-showcase">
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
                key={index}
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
                  width: `${
                    ((active + 1) / features.length) * 100
                  }%`,
                }}
              />
            </div>

            <div className="mira-nav-buttons">
              {features.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className={`mira-nav-btn ${
                    active === index ? "active" : ""
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
import React, { useEffect, useState } from "react";
import "./TshirtRotator.css";

import tshirtFront from "../../assets/tshirt-front.jpeg";
import tshirtRight from "../../assets/tshirt-right.jpeg";
import tshirtBack from "../../assets/tshirt-back.jpeg";
import tshirtLeft from "../../assets/tshirt-left.jpeg";

const frames = [
  {
    src: tshirtFront,
    alt: "T-shirt front view",
    className: "front-frame",
  },
  {
    src: tshirtRight,
    alt: "T-shirt right side view",
    className: "right-frame",
  },
  {
    src: tshirtBack,
    alt: "T-shirt back view",
    className: "back-frame",
  },
  {
    src: tshirtLeft,
    alt: "T-shirt left side view",
    className: "left-frame",
  },
];

const getTimeLeft = (targetTime) => {
  const difference = targetTime - new Date().getTime();

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

const TshirtRotator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 1 day countdown from page load
  const [targetTime] = useState(() => new Date().getTime() + 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetTime));

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 900);

    return () => clearInterval(rotateInterval);
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetTime]);

  return (
    <section className="tshirt-rotator-section">
      <div className="tshirt-hero-content">
        <p className="tshirt-small-title">Premium Streetwear Drop</p>
        <h1>
          The King <br />
          T-Shirt
        </h1>
        <p className="tshirt-description">
          WALK LIKE A KING, OR WALK AS IF YOU DON'T CARE WHO THE KING IS.
        </p>
      </div>

      <div className="tshirt-rotator-wrap">
        {frames.map((frame, index) => (
          <img
            key={index}
            src={frame.src}
            alt={frame.alt}
            className={`tshirt-frame ${frame.className} ${
              activeIndex === index ? "active" : ""
            }`}
          />
        ))}
      </div>

      <div className="tshirt-countdown-area">
        <div className="limited-heading">
          <span></span>
          <h2>LIMITED EDITION - 50 PIECES LEFT!</h2>
          <span></span>
        </div>

        <div className="countdown-boxes">
          <div className="countdown-card">
            <strong>{timeLeft.days}</strong>
            <p>DAYS</p>
          </div>

          <div className="countdown-dots">:</div>

          <div className="countdown-card">
            <strong>{timeLeft.hours}</strong>
            <p>HOURS</p>
          </div>

          <div className="countdown-dots">:</div>

          <div className="countdown-card">
            <strong>{timeLeft.minutes}</strong>
            <p>MINUTES</p>
          </div>

          <div className="countdown-dots">:</div>

          <div className="countdown-card">
            <strong>{timeLeft.seconds}</strong>
            <p>SECONDS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TshirtRotator;
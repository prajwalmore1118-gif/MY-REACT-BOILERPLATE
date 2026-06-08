import React, { useEffect, useState } from "react";

import tshirtFront from "../../assets/tshirt-front.jpeg";
import tshirtRight from "../../assets/tshirt-right.jpeg";
import tshirtBack from "../../assets/tshirt-back.jpeg";
import tshirtLeft from "../../assets/tshirt-left.jpeg";
import tshirtBanner from "../../assets/king/tshirtBanner.png";

const frames = [
  { src: tshirtFront, alt: "T-shirt front view", rotateY: "rotateY(0deg)" },
  { src: tshirtRight, alt: "T-shirt right side view", rotateY: "rotateY(-8deg)" },
  { src: tshirtBack, alt: "T-shirt back view", rotateY: "rotateY(0deg)" },
  { src: tshirtLeft, alt: "T-shirt left side view", rotateY: "rotateY(8deg)" },
];

const getTimeLeft = (targetTime) => {
  const difference = targetTime - new Date().getTime();
  if (difference <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };
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
  const [targetTime] = useState(() => new Date().getTime() + 24 * 60 * 60 * 1000);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetTime));

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % frames.length);
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
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-between overflow-hidden relative">
      {/* Background Logo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={tshirtBanner}
          alt=""
          className=" absolute right-[-4.2%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[900px] opacity-[0.4] select-none hidden md:block"
        />
      </div>
      {/* Hero content */}
      <div
        className="
        w-full px-6 pt-12 pb-0 z-[5]
        flex flex-col items-start
        max-[991px]:items-center max-[991px]:text-center
        max-[767px]:items-start max-[767px]:text-left max-[767px]:pt-8 max-[767px]:px-5
        lg:absolute lg:top-[70px] lg:left-[7%] lg:w-auto lg:max-w-[420px] lg:px-0 lg:pt-0
      "
      >
        <p
          className="m-0 mb-[12px] text-[#b9b9b9] uppercase tracking-[5px] max-[767px]:tracking-[3px]"
          style={{ fontSize: "clamp(11px, 0.85vw, 13px)" }}
        >
          Premium Streetwear Drop
        </p>
        <h1
          className="m-0 font-black uppercase leading-[0.9] tracking-[-3px] max-[767px]:tracking-[-1px]"
          style={{ fontSize: "clamp(44px, 5.5vw, 104px)" }}
        >
          The King <br /> T-Shirt
        </h1>
        <p
          className="mt-[18px] mb-0 text-white/[0.68] leading-[1.6] max-w-[360px] max-[767px]:max-w-[300px] max-[991px]:mx-auto max-[767px]:mx-0"
          style={{ fontSize: "clamp(13px, 1.1vw, 17px)" }}
        >
          WALK LIKE A KING, OR WALK AS IF YOU DON'T CARE WHO THE KING IS.
        </p>
      </div>

      {/* Rotating t-shirt — bigger + shifted down to clear navbar */}
      <div
        className="relative flex items-center justify-center z-[3] flex-shrink-0 mx-auto
          max-[767px]:w-full max-[767px]:px-4
        "
        style={{
          width: "clamp(320px, 62vw, 720px)",
          height: "clamp(340px, 63vh, 720px)",
          perspective: "1200px",
          marginTop: "clamp(50px, 6vh, 90px)" /* ← pushes down, clears navbar */,
        }}
      >
        {frames.map((frame, index) => {
          const isActive = activeIndex === index;
          return (
            <img
              key={index}
              src={frame.src}
              alt={frame.alt}
              className="absolute max-w-full max-h-full object-contain transition-[opacity,transform] duration-[450ms] ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? `scale(1) ${frame.rotateY}` : "scale(0.96) rotateY(20deg)",
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.7))",
              }}
            />
          );
        })}
      </div>

      {/* Countdown area */}
      <div className="w-full flex-shrink-0 flex flex-col items-center z-[6] text-center px-4 pt-4 pb-10 lg:pb-12">
        {/* Limited heading */}
        <div className="flex items-center justify-center w-full max-w-[860px] mb-5 max-[767px]:mb-4 px-2">
          <span className="h-px flex-1 bg-white/[0.28]" />
          <h2
            className="mx-4 m-0 font-bold max-[767px]:whitespace-normal max-[767px]:leading-[1.5]"
            style={{
              fontSize: "clamp(11px, 1.5vw, 26px)",
              letterSpacing: "clamp(3px, 0.7vw, 10px)",
              whiteSpace: "nowrap",
            }}
          >
            LIMITED EDITION - 50 PIECES LEFT!
          </h2>
          <span className="h-px flex-1 bg-white/[0.28]" />
        </div>

        {/* Countdown boxes */}
        <div
          className="flex items-center justify-center w-full"
          style={{ gap: "clamp(6px, 1.6vw, 26px)" }}
        >
          {[
            { value: timeLeft.days, label: "DAYS" },
            null,
            { value: timeLeft.hours, label: "HOURS" },
            null,
            { value: timeLeft.minutes, label: "MINUTES" },
            null,
            { value: timeLeft.seconds, label: "SECONDS" },
          ].map((item, i) =>
            item === null ? (
              <div
                key={i}
                className="text-white/[0.32] leading-none flex-shrink-0"
                style={{
                  fontSize: "clamp(22px, 3.2vw, 48px)",
                  marginTop: "clamp(-10px, -1.1vw, -20px)",
                }}
              >
                :
              </div>
            ) : (
              <div
                key={i}
                className="rounded-[6px] bg-white/[0.055] border border-white/[0.12] flex flex-col items-center justify-center flex-shrink-0"
                style={{
                  width: "clamp(60px, 9.5vw, 128px)",
                  padding: "clamp(12px, 1.4vw, 20px) clamp(6px, 0.8vw, 14px)",
                }}
              >
                <strong
                  className="leading-none font-extrabold"
                  style={{
                    fontSize: "clamp(20px, 2.6vw, 30px)",
                    letterSpacing: "clamp(1px, 0.28vw, 3px)",
                  }}
                >
                  {item.value}
                </strong>
                <p
                  className="mb-0 text-white/50"
                  style={{
                    marginTop: "clamp(8px, 1vw, 18px)",
                    fontSize: "clamp(8px, 0.78vw, 13px)",
                    letterSpacing: "clamp(1.5px, 0.35vw, 4px)",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default TshirtRotator;

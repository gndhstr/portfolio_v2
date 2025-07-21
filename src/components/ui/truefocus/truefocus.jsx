import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TrueFocus = ({
  sentence = "Graphic Designer | Web Programmer",
  manualMode = true,
  blurAmount = 5,
  borderColor = "red",
  glowColor = "rgba(255, 0, 0, 0.6)",
  animationDuration = 0.3,
}) => {
  const phrases = sentence.split(" | ");
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [prevX, setPrevX] = useState(0);
  const [dir, setDir] = useState("right");

  const activeIndex = hoverIndex !== null ? hoverIndex : lastActiveIndex;

  useEffect(() => {
    if (
      activeIndex === null ||
      !itemRefs.current[activeIndex] ||
      !containerRef.current
    )
      return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = itemRefs.current[activeIndex].getBoundingClientRect();

    const newX = activeRect.left - parentRect.left;

    // Deteksi arah animasi
    if (newX < prevX) {
      setDir("left");
    } else if (newX > prevX) {
      setDir("right");
    }

    setPrevX(newX);
    setFocusRect({
      x: newX,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [activeIndex]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setLastActiveIndex(hoverIndex ?? lastActiveIndex);
    setHoverIndex(null);
  };

  return (
    <div
      className="relative flex gap-6 justify-center items-center flex-wrap"
      ref={containerRef}
    >
      {phrases.map((phrase, index) => {
        const isActive = index === activeIndex;
        return (
          <span
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="relative text-sm md:text-xl font-medium md:font-bold cursor-pointer leading-none"
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {phrase}
          </span>
        );
      })}

      {activeIndex !== null && (
        <motion.div
          className="absolute top-0 left-0 pointer-events-none box-border border-0"
          key={activeIndex} // agar framer-motion mendeteksi ulang
          initial={{
            x: dir === "right" ? focusRect.x - 30 : focusRect.x + 30,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: 0,
          }}
          animate={{
            x: focusRect.x,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: 1,
          }}
          transition={{
            duration: animationDuration,
            ease: "easeOut",
          }}
          style={{
            "--border-color": borderColor,
            "--glow-color": glowColor,
          }}
        >
          {[
            "top-[-10px] left-[-10px] border-r-0 border-b-0",
            "top-[-10px] right-[-10px] border-l-0 border-b-0",
            "bottom-[-10px] left-[-10px] border-r-0 border-t-0",
            "bottom-[-10px] right-[-10px] border-l-0 border-t-0",
          ].map((cls, i) => (
            <span
              key={i}
              className={`absolute w-4 h-4 border-[3px] rounded-[3px] ${cls}`}
              style={{
                borderColor: "var(--border-color)",
                filter: "drop-shadow(0 0 4px var(--border-color))",
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default TrueFocus;

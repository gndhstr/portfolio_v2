import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const GAP = 16;
const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = [],
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === carouselItems.length - 1 ? 0 : prev + 1
        );
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        prev === carouselItems.length - 1 ? prev : prev + 1
      );
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  const dragProps = {
    dragConstraints: {
      left: -trackItemOffset * (carouselItems.length - 1),
      right: 0,
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-xl border border-white/10 p-4 w-full max-w-xl mx-auto bg-black/20"
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          gap: `${GAP}px`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const rotateY = useTransform(
            x,
            [
              -(index + 1) * trackItemOffset,
              -index * trackItemOffset,
              -(index - 1) * trackItemOffset,
            ],
            [90, 0, -90]
          );
          return (
            <motion.div
              key={index}
              className="shrink-0 rounded-xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-md"
              style={{
                width: itemWidth,
                rotateY: rotateY,
              }}
              transition={SPRING_OPTIONS}
            >
              <img
                src={item.image}
                alt={`carousel-${index}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-3 text-white text-sm">{item.caption}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex % items.length === index
                ? "bg-white"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

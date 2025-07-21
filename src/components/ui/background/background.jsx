import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGradientBackground({ children }) {
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Deteksi apakah perangkat menggunakan pointer coarse (touchscreen)
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isCoarse);

    if (!isCoarse) {
      const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    } else {
      // Jika perangkat sentuh, posisikan tetap di tengah layar
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
  }, [mouseX, mouseY]);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(circle 800px at ${x}px ${y}px, rgba(168, 85, 247, 0.4), transparent 60%)`
  );

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: background,
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

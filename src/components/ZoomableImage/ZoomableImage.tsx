import { FC, MouseEvent, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ZoomImageProps {
  src: string;
  alt: string;
  zoom?: number;
}

export const ZoomImage: FC<ZoomImageProps> = ({ src, alt, zoom = 2.8 }) => {
  const [origin, setOrigin] = useState<string>("50% 50%");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMousePosition = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const size = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - size.x) / size.width) * 100;
    const y = ((e.clientY - size.y) / size.height) * 100;

    setOrigin(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setOrigin("50% 50%");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMousePosition}
      onMouseLeave={handleMouseLeave}
      className="min-w-[463px] p-[50px] max-w-[413px] h-[516px] overflow-hidden flex justify-center items-center "
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          transformOrigin: origin,
        }}
        whileHover={{ scale: zoom }}
        className="max-w-full max-h-full w-full object-contain cursor-zoom-in transition-transform duration-500"
      />
    </div>
  );
};

import { FC, MouseEvent, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ZoomImageProps {
  src: string;
  alt: string;
  zoom?: number;
}

export const ZoomImage: FC<ZoomImageProps> = ({ src, alt, zoom = 2.9 }) => {
  const [origin, setOrigin] = useState<string>('50% 50%');
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMousePosition = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const size = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - size.x) / size.width) * 100;
    const y = ((e.clientY - size.y) / size.height) * 100;

    setOrigin(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setOrigin('50% 50%');
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMousePosition}
      onMouseLeave={handleMouseLeave}
      className="flex h-[516px] max-w-[413px] min-w-[463px] items-center justify-center overflow-hidden p-[30px]"
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
        className="max-h-full w-full max-w-full cursor-zoom-in object-contain transition-transform duration-500"
      />
    </div>
  );
};

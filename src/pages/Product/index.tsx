import { useState } from "react";
import { motion } from "framer-motion";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { product } from "../../helpers/temporaryData/product";
import { ZoomImage } from "../../components/ZoomableImage/ZoomableImage";

export default function Product() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section>
      <BreadCrumbs
        pathnames={[
          "Home",
          "Catalog",
          "Smartphones",
          "Apple",
          "iPhone 16 Pro Max",
        ]}
      />
      <div className=" container pt-[10px] pb-[81px]">
        {product.map(({ images, _id, name }) => {
          return (
            <div key={_id} className=" flex gap-[48px] items-center">
              <div className=" flex flex-col items-center justify-center gap-[24px]">
                {images.map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`${name}`}
                    className={`w-[75px] h-[93px] object-contain cursor-pointer `}
                    style={{
                      filter:
                        activeIndex === index ? "none" : "grayscale(100%)",
                      opacity: activeIndex === index ? 1 : 0.6,
                    }}
                    whileHover={{ scale: 1.3, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <ZoomImage src={images[activeIndex]} alt={name} key={_id} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

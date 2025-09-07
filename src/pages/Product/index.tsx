import { useState } from 'react';
import { motion } from 'framer-motion';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { product, brandColors } from '../../helpers/temporaryData/product';
import { ZoomImage } from '../../components/ZoomableImage/ZoomableImage';
import { ProductColorRadio } from '../../components/RadioComponents/ProductColorRadio/ProductColorRadio';
import { OptionSelector } from '../../components/RadioComponents/OptionSelector/OptionSelector';

export default function Product() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const options = ['256GB', '516GB', '1TB'];

  return (
    <section>
      <BreadCrumbs
        pathnames={[
          'Home',
          'Catalog',
          'Smartphones',
          'Apple',
          'iPhone 16 Pro Max',
        ]}
      />
      <div className="container pt-[10px] pb-[81px]">
        {product.map(
          ({ images, _id, name, discount, price, storage, color }) => {
            let newPrice: number = price;

            if (discount) {
              const percentage: number = (price * discount) / 100;
              newPrice = Number((price - percentage).toFixed());
            }

            return (
              <div key={_id} className="flex gap-[30px]">
                <div className="flex items-center gap-[28px]">
                  <div className="flex w-max flex-col items-center justify-center gap-[24px]">
                    {images.map((src, index) => (
                      <motion.img
                        key={src}
                        src={src}
                        alt={`${name}`}
                        className={`h-[93px] w-[75px] cursor-pointer object-contain`}
                        style={{
                          filter:
                            activeIndex === index ? 'none' : 'grayscale(100%)',
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
                <div>
                  <h3 className="mb-[24px] text-[40px] leading-[100%] font-bold tracking-[-0.01em] text-[var(--dark-text)]">
                    {name}
                  </h3>

                  <div className="flex items-center gap-[16px]">
                    <p className="text-[32px] leading-[150%] font-medium text-[var(--dark-text)]">
                      ${newPrice}
                    </p>
                    {discount > 0 && (
                      <p className="text-[24px] leading-[133%] font-normal tracking-[0.03em] text-[#a0a0a0] line-through">
                        ${price}
                      </p>
                    )}
                  </div>
                  {Object.values(brandColors).length >= 2 && (
                    <ProductColorRadio
                      brandColors={brandColors}
                      productColor={color}
                    />
                  )}
                  <div className="my-[24px]">
                    <OptionSelector
                      brandOptions={options}
                      productOptions={storage}
                    />
                  </div>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}

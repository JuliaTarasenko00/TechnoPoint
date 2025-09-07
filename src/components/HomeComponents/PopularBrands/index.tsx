import { motion } from 'framer-motion';

import { popularBrands } from '../../../helpers/temporaryData/popularBrands';

export const PopularBrands = () => {
  return (
    <section className="">
      <div className="container px-[60px]">
        <h3 className="text-[24px] leading-[133%] font-medium text-[var(--dark-text)]">
          Popular Brands
        </h3>
        <ul className="mt-[36px] flex flex-wrap items-center justify-center gap-[16px]">
          {popularBrands.map(({ img }) => (
            <motion.li
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
              }}
              key={img}
              className="h-[100px] w-[250px] cursor-pointer rounded-[13px] bg-[#f9f9f9] p-[20px]"
            >
              <img
                src={img}
                alt=" "
                width={130}
                height={100}
                className="h-full w-full object-contain"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";

import { popularBrands } from "../../../helpers/temporaryData/popularBrands";

export const PopularBrands = () => {
  return (
    <section className="">
      <div className="container px-[60px]">
        <h3 className=" text-[24px] font-medium leading-[133%] text-[var(--dark-text)]">
          Popular Brands
        </h3>
        <ul className="flex gap-[16px] items-center mt-[36px] justify-center flex-wrap">
          {popularBrands.map(({ img }) => (
            <motion.li
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
              }}
              key={img}
              className=" w-[250px] bg-[#f9f9f9] h-[100px] p-[20px] rounded-[13px] cursor-pointer"
            >
              <img
                src={img}
                alt=" "
                width={130}
                height={100}
                className=" w-full h-full object-contain"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

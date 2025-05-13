import { motion } from "framer-motion";

import { categories } from "../../../helpers/temporaryData/categories";

export const BrowseByCategory = () => {
  return (
    <section className="  bg-[#fafafa]  ">
      <div className="container pt-[50px] pb-[80px]">
        <h3 className=" text-[24px] font-medium leading-[133%] text-[var(--dark-text)]">
          Browse By Category
        </h3>
        <ul className=" flex items-center justify-center gap-[32px] mt-[32px] text-[#var(--dark-text)]">
          {categories.map(({ category, img: Element }) => {
            return (
              <motion.li
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                }}
                key={category}
                className="relative group flex flex-col items-center justify-center w-[150px] max-w-[150px] h-[120px] max-h-[120px] rounded-[13px]"
              >
                <div className="absolute bg-[#ededed] rounded-[13px] w-full h-full transition-transform duration-500 group-hover:scale-[1.03] group-focus:scale-[1.03]"></div>

                <div className="relative group z-10 flex flex-col items-center gap-[14px]">
                  <div className="w-[38px] h-[38px]  transition-color duration-300 group-hover:text-[var(--dark-purple)] group-focus:text-[var(--dark-purple)]">
                    <Element />
                  </div>
                  <p className="text-[16px] leading-[150%]">{category}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

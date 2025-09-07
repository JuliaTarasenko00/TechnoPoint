import { motion } from 'framer-motion';

import { categories } from '../../../helpers/temporaryData/categories';

export const BrowseByCategory = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="container pt-[50px] pb-[80px]">
        <h3 className="text-[24px] leading-[133%] font-medium text-[var(--dark-text)]">
          Browse By Category
        </h3>
        <ul className="mt-[32px] flex items-center justify-center gap-[32px] text-[#var(--dark-text)]">
          {categories.map(({ category, img: Element }) => {
            return (
              <motion.li
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                }}
                key={category}
                className="group relative flex h-[120px] max-h-[120px] w-[150px] max-w-[150px] flex-col items-center justify-center rounded-[13px]"
              >
                <div className="absolute h-full w-full rounded-[13px] bg-[#ededed] transition-transform duration-500 group-hover:scale-[1.03] group-focus:scale-[1.03]"></div>

                <div className="group relative z-10 flex flex-col items-center gap-[14px]">
                  <div className="transition-color h-[38px] w-[38px] duration-300 group-hover:text-[var(--dark-purple)] group-focus:text-[var(--dark-purple)]">
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

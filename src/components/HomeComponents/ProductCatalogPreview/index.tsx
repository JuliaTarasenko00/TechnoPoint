import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { products } from '../../../helpers/temporaryData/products';
import { MarkupProduct } from '../../MarkupProduct/MarkupProduct';

interface Product {
  _id: string;
  name: string;
  price: number;
  img: string;
}

interface Tab {
  label: string;
  data: Product[];
}

const tabs: Tab[] = [
  { label: 'New Arrival', data: products },
  { label: 'Bestseller', data: [] },
  { label: 'Featured Products', data: [] },
];

export const ProductCatalogPreview = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const tabContent = useMemo(() => {
    if (!activeTab.data.length) {
      return <p>Oops, no items yet 👽</p>;
    }

    return <MarkupProduct products={activeTab.data} />;
  }, [activeTab]);

  return (
    <section className="py-[56px]">
      <div className="container">
        <ul className="mb-[32px] flex items-center gap-[32px]">
          {tabs.map((tab) => (
            <motion.li
              key={tab.label}
              initial={false}
              onClick={() => setActiveTab(tab)}
              className="relative cursor-pointer text-center text-[18px] leading-[178%] font-medium"
              style={{
                color:
                  activeTab.label === tab.label
                    ? 'var(--dark-text)'
                    : '#8b8b8b',
              }}
            >
              {tab.label}
              {activeTab.label === tab.label && (
                <motion.div
                  className="absolute right-0 bottom-[-1px] left-0 h-[2px] rounded-[6px] bg-[var(--dark-background)]"
                  layoutId="underline"
                />
              )}
            </motion.li>
          ))}
        </ul>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tabContent}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

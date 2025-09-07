import { products } from '../../../helpers/temporaryData/products';
import { MarkupProduct } from '../../MarkupProduct/MarkupProduct';

export const DiscountedProducts = () => {
  const discountProduct = products.slice(4, 8);

  return (
    <section className="py-[56px]">
      <div className="container">
        <h3 className="mb-[32px] text-[24px] leading-[133%] font-medium text-[var(--dark-text)]">
          Discounts up to -50%
        </h3>
        <MarkupProduct products={discountProduct} />
      </div>
    </section>
  );
};

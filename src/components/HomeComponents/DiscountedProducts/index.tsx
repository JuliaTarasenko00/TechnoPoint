import { products } from "../../../helpers/temporaryData/products";
import { MarkupProduct } from "../../MarkupProduct/MarkupProduct";

export const DiscountedProducts = () => {
  const discountProduct = products.slice(4, 8);

  return (
    <section className="py-[56px]">
      <div className="container">
        <h3 className=" text-[24px] mb-[32px] font-medium leading-[133%] text-[var(--dark-text)]">
          Discounts up to -50%
        </h3>
        <MarkupProduct products={discountProduct} />
      </div>
    </section>
  );
};

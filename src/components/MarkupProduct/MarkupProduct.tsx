import { FC } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IProducts } from "../../helpers/temporaryData/products";

interface MarkupProductProps {
  products: IProducts[];
}

export const MarkupProduct: FC<MarkupProductProps> = ({ products }) => {
  return (
    <ul className=" flex flex-wrap justify-center gap-[16px]">
      {products.map(({ _id, name, img, price }) => (
        <li
          key={_id}
          className=" shadow-md relative max-w-[268px] rounded-[9px] w-[268px] bg-[#f6f6f6] py-[24px] px-[16px] flex flex-col justify-center"
        >
          <button
            type="button"
            className=" w-[32px] h-[32px] ml-auto text-[#8b8b8b] hover:text-[#f00] transition-colors duration-300"
          >
            <IoIosHeartEmpty />
          </button>
          <div className=" flex-[1] w-[160px] mb-[16px] h-[160px] place-self-center place-content-center">
            <img
              src={img}
              alt={name}
              width={160}
              height={260}
              className=" object-fill w-full"
            />
          </div>
          <div className=" text-center">
            <h3 className=" font-medium text-[16px] leading-[150%] hover:underline transition-all duration-300">
              {name}
            </h3>
            <p className=" font-semibold text-[24px] mt-[16px] mb-[24px] leading-[100%]">
              ${price}
            </p>
            <button
              type="button"
              className=" text-[#fff] w-[188px] h-[48px] font-medium text-[14px] leading-[171%] bg-[#000] rounded-[8px] hover:bg-[#522b5b] transition-color duration-300"
            >
              Buy Now
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

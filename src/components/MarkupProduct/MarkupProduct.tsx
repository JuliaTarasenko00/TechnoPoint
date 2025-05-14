import { FC } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IProducts } from "../../helpers/temporaryData/products";

interface MarkupProductProps {
  products: IProducts[];
}

export const MarkupProduct: FC<MarkupProductProps> = ({ products }) => {
  const token = "";

  return (
    <ul className="flex flex-wrap justify-center gap-[16px]">
      {products.map(({ _id, name, img, price }) => (
        <li
          key={_id}
          className="shadow-md group relative max-w-[268px] rounded-[9px] w-[268px] bg-[#f6f6f6] py-[24px] px-[16px] flex flex-col justify-center"
        >
          <div className="relative ml-auto ">
            <button
              disabled={!token}
              type="button"
              className="peer pointer-events-auto w-[32px] h-[32px] text-[#8b8b8b] disabled:hover:text-[#8b8b8b] disabled:focus:text-[#8b8b8b] hover:text-[#f00] focus:text-[#f00] transition-colors duration-300"
            >
              <IoIosHeartEmpty />
            </button>
            {!token && (
              <div className="absolute w-[235px] right-0 bg-[#000000b0] pointer-events-none transition-opacity duration-500 z-20 px-[15px] py-[5px] rounded-[3px] opacity-0 peer-hover:opacity-100">
                <p className="text-[var(--second-text-color)]">
                  Please log in to add the item to your wishlist
                </p>
              </div>
            )}
          </div>

          <div className="flex-[1] w-[160px] mb-[16px] h-[160px] place-self-center place-content-center">
            <img
              src={img}
              alt={name}
              width={160}
              height={260}
              className="object-fill w-full group-hover:scale-[1.05] group-focus:scale-[1.05] transition-transform duration-500"
            />
          </div>

          <div className="text-center">
            <h3 className="font-medium text-[16px] leading-[150%] hover:underline focus:underline transition-all duration-300">
              {name}
            </h3>
            <p className="font-semibold text-[24px] mt-[16px] mb-[24px] leading-[100%]">
              ${price}
            </p>
            <button
              type="button"
              className="text-[var(--second-text-color)] w-[188px] h-[48px] font-medium text-[14px] leading-[171%] bg-[var(--dark-background)] rounded-[8px] hover:bg-[var(--dark-purple)] focus:bg-[var(--dark-purple)] transition-color duration-300"
            >
              Buy Now
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

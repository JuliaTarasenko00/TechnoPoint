import { FC } from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IProducts } from '../../helpers/temporaryData/products';

interface MarkupProductProps {
  products: IProducts[];
}

export const MarkupProduct: FC<MarkupProductProps> = ({ products }) => {
  const token = '';

  return (
    <ul className="flex flex-wrap justify-center gap-[16px]">
      {products.map(({ _id, name, img, price }) => (
        <li
          key={_id}
          className="group relative flex w-[268px] max-w-[268px] flex-col justify-center rounded-[9px] bg-[#f6f6f6] px-[16px] py-[24px] shadow-md"
        >
          <div className="relative ml-auto">
            <button
              disabled={!token}
              type="button"
              className="peer pointer-events-auto h-[32px] w-[32px] text-[#8b8b8b] transition-colors duration-300 hover:text-[#f00] focus:text-[#f00] disabled:hover:text-[#8b8b8b] disabled:focus:text-[#8b8b8b]"
            >
              <IoIosHeartEmpty />
            </button>
            {!token && (
              <div className="pointer-events-none absolute right-0 z-20 w-[235px] rounded-[3px] bg-[#000000b0] px-[15px] py-[5px] opacity-0 transition-opacity duration-500 peer-hover:opacity-100">
                <p className="text-[var(--second-text-color)]">
                  Please log in to add the item to your wishlist
                </p>
              </div>
            )}
          </div>

          <div className="mb-[16px] h-[160px] w-[160px] flex-[1] place-content-center place-self-center">
            <img
              src={img}
              alt={name}
              width={160}
              height={260}
              className="w-full object-fill transition-transform duration-500 group-hover:scale-[1.05] group-focus:scale-[1.05]"
            />
          </div>

          <div className="text-center">
            <h3 className="text-[16px] leading-[150%] font-medium transition-all duration-300 hover:underline focus:underline">
              {name}
            </h3>
            <p className="mt-[16px] mb-[24px] text-[24px] leading-[100%] font-semibold">
              ${price}
            </p>
            <button
              type="button"
              className="transition-color h-[48px] w-[188px] cursor-pointer rounded-[8px] bg-[var(--dark-background)] text-[14px] leading-[171%] font-medium text-[var(--second-text-color)] duration-300 hover:bg-[var(--dark-purple)] focus:bg-[var(--dark-purple)]"
            >
              Buy Now
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

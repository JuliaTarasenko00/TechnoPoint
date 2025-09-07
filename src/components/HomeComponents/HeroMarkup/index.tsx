import { useEffect, useState } from 'react';
import phone from '../../../assets/image/hero_section_img.webp';

export const HeroSection = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = phone;
    img.onload = () => setIsLoad(true);
  }, [isLoad]);

  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-[#190019] via-[#2b124c] to-[#522b5b]"
    >
      <div className="container h-[632px] overflow-hidden">
        <div className="flex items-center justify-evenly gap-[50px]">
          <div
            className={`transition-opacity duration-500 ease-out ${
              isLoad ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-[25px] leading-[128%] font-semibold text-[var(--second-text-color)] opacity-[0.4]">
              Pro.Beyond.
            </h1>
            <h3 className="my-[24px] text-[96px] leading-[75%] font-extralight tracking-tight text-[var(--second-text-color)]">
              IPhone 16 <span className="font-semibold">Pro</span>
            </h3>
            <p className="text-[18px] leading-[133%] text-[#909090]">
              Created to change everything for the better. For everyone
            </p>
            <button
              type="button"
              className="group relative mt-[24px] cursor-pointer px-[56px] py-[16px] text-[16px] leading-[150%] font-medium text-[var(--second-text-color)]"
            >
              <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-[#fff] transition-all duration-500 group-hover:scale-[1.03] group-focus:scale-[1.03]"></div>
              Shop Now
            </button>
          </div>
          <img
            src={phone}
            alt=""
            width={406}
            className={`scale-[1.01] drop-shadow-[10px_10px_10px_#00000060] transition-all duration-2500 ease-out ${
              isLoad ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  );
};

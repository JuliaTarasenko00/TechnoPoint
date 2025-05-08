import { useEffect, useState } from "react";
import phone from "../../../assets/image/hero_section_img.webp";

export const HeroSection = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = phone;
    img.onload = () => setIsLoad(true);
  }, [isLoad]);

  return (
    <section className="dark:bg-[linear-gradient(95deg,_#221a27_0%,_#20152c_100%)] bg-gradient-to-r from-[#190019] via-[#2b124c] to-[#522b5b]">
      <div className=" container h-[632px] overflow-hidden">
        <div className=" flex items-center justify-evenly gap-[50px]">
          <div
            className={`transition-opacity duration-500 ease-out ${
              isLoad ? "opacity-100 " : "opacity-0 "
            }`}
          >
            <h1 className=" text-[25px] leading-[128%] text-[var(--second-text-color)] opacity-[0.4] font-semibold">
              Pro.Beyond.
            </h1>
            <h3 className=" text-[var(--second-text-color)] dark:text-[var(--main-text-color-dark)] tracking-tight my-[24px] text-[96px] leading-[75%] font-extralight">
              IPhone 16 <span className=" font-semibold">Pro</span>
            </h3>
            <p className=" text-[#909090] text-[18px] leading-[133%]">
              Created to change everything for the better. For everyone
            </p>
            <button
              type="button"
              className=" relative group cursor-pointer mt-[24px] text-[16px]  leading-[150%] font-medium dark:text-[var(--main-text-color-dark)] text-[var(--second-text-color)] py-[16px] px-[56px]"
            >
              <div className=" absolute top-0 left-0 w-full h-full transition-all duration-500 rounded-[6px] group-hover:scale-[1.03] border-[1px] border-[#fff]"></div>
              Shop Now
            </button>
          </div>
          <img
            src={phone}
            alt=""
            width={406}
            className={`transition-all scale-[1.01] duration-2500 ease-out drop-shadow-[10px_10px_10px_#00000060] ${
              isLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

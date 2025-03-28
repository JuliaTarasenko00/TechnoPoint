import phone from "../../assets/image/hero_section_img.webp";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1c1b29] via-[#2a223a] to-[#1c1b29] dark:bg-gradient-to-r dark:from-[#191724] dark:via-[#1f1d2e] dark:to-[#191724]">
      <div className=" container h-[632px]">
        <div className=" flex items-center justify-evenly gap-[50px]">
          <div>
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
              className=" mt-[24px] text-[16px] rounded-[6px] leading-[150%] font-medium dark:text-[var(--main-text-color-dark)] dark:border-[( --main-text-color-dark)] text-[var(--second-text-color)] py-[16px] px-[56px] border-[1px] border-[#fff]"
            >
              Shop Now
            </button>
          </div>
          <img src={phone} alt="" width={406} className=" " />
        </div>
      </div>
    </section>
  );
};

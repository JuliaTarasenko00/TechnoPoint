import { AdvertisingCommunication } from "./AdvertisingCommunication";
import { information } from "./information";
import { assistance, consultation, services } from "./services";

const styleTitle =
  " text-[20px] font-semibold text-[var(--second-text-color)] leading-[110%]";

const styleLink =
  "text-[var(--grey-color)] text-[14px] leading-[229%] hover:underline focus:underline";

export const Footer = () => {
  return (
    <>
      <section className="container bg-[url('./../assets/image/Banner.png')] bg-cover w-full h-[448px] p-0 bg-center bg-no-repeat">
        <div className=" flex items-center justify-center flex-col w-full h-full">
          <p className=" text-[72px] tracking-[-0.01em] text-[var(--second-text-color)] font-thin">
            Big Summer<span className=" font-medium"> Sale</span>
          </p>
          <p className=" text-[#787878] text-[16px] mt-[5px] font-normal">
            Buy today so as not to overpay tomorrow
          </p>
          <button
            type="button"
            className=" relative group cursor-pointer mt-[24px] text-[16px]  leading-[150%] font-medium text-[var(--second-text-color)] py-[16px] px-[56px]"
          >
            <div className=" absolute top-0 left-0 w-full h-full transition-all duration-500 rounded-[6px] group-hover:scale-[1.03] group-focus:scale-[1.03] border-[1px] border-[var(--second-text-color)]"></div>
            Shop Now
          </button>
        </div>
      </section>

      <section className=" border-b-[1px] border-b-[#ffffffad]">
        <ul className=" container flex gap-[10px] pb-[15px] pt-[30px]">
          {information.map(({ title, svg: Image, description }) => (
            <li key={title} className=" flex gap-[2px] flex-wrap items-start">
              <div className="flex-1 flex gap-[5px] items-center">
                <span className=" w-[18px] h-[18px] block text-[var(--second-text-color)]">
                  <Image />
                </span>
                <h2 className=" text-[var(--second-text-color)] text-[12px]">
                  {title}
                </h2>
              </div>
              <p className=" text-[var(--grey-color)] text-[10px]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className=" container pt-[25px]">
        <div className=" flex items-start justify-between">
          <AdvertisingCommunication />

          <div>
            <p className={styleTitle}>Services</p>
            <ul>
              {services.map((name) => (
                <li key={name}>
                  <a href="#hero" className={styleLink}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className=" text-[16px] font-semibold text-[var(--second-text-color)] leading-[100%]">
              Assistance to the buyer
            </p>
            <ul>
              {assistance.map((name) => (
                <li key={name}>
                  <a href="#hero" className={styleLink}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styleTitle}>Consultation</p>
            <a
              href="tel:+0800000000"
              className=" text-[var(--second-text-color)] leading-[100%] text-[25px] my-[10px] block font-black"
            >
              0-800-000-000
            </a>
            <ul>
              {consultation.map(({ title, img: Image }) => (
                <li key={title} className="flex gap-[5px] items-center">
                  <span className=" w-[20px] h-[20px] block text-[var(--second-text-color)]">
                    <Image />
                  </span>
                  <a href="#hero" className={styleLink}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

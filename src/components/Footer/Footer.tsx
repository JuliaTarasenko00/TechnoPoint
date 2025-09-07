import { AdvertisingCommunication } from './AdvertisingCommunication';
import { information } from './information';
import { assistance, consultation, services } from './services';

const styleTitle =
  ' text-[20px] font-semibold text-[var(--second-text-color)] leading-[110%]';

const styleLink =
  'text-[var(--grey-color)] text-[14px] leading-[229%] hover:underline focus:underline';

export const Footer = () => {
  return (
    <>
      <section className="container h-[448px] w-full bg-[url('./../assets/image/Banner.png')] bg-cover bg-center bg-no-repeat p-0">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <p className="text-[72px] font-thin tracking-[-0.01em] text-[var(--second-text-color)]">
            Big Summer<span className="font-medium"> Sale</span>
          </p>
          <p className="mt-[5px] text-[16px] font-normal text-[#787878]">
            Buy today so as not to overpay tomorrow
          </p>
          <button
            type="button"
            className="group relative mt-[24px] cursor-pointer px-[56px] py-[16px] text-[16px] leading-[150%] font-medium text-[var(--second-text-color)]"
          >
            <div className="absolute top-0 left-0 h-full w-full rounded-[6px] border-[1px] border-[var(--second-text-color)] transition-all duration-500 group-hover:scale-[1.03] group-focus:scale-[1.03]"></div>
            Shop Now
          </button>
        </div>
      </section>

      <section className="border-b-[1px] border-b-[#ffffffad]">
        <ul className="container flex gap-[10px] pt-[30px] pb-[15px]">
          {information.map(({ title, svg: Image, description }) => (
            <li key={title} className="flex flex-wrap items-start gap-[2px]">
              <div className="flex flex-1 items-center gap-[5px]">
                <span className="block h-[18px] w-[18px] text-[var(--second-text-color)]">
                  <Image />
                </span>
                <h2 className="text-[12px] text-[var(--second-text-color)]">
                  {title}
                </h2>
              </div>
              <p className="text-[10px] text-[var(--grey-color)]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container pt-[25px]">
        <div className="flex items-start justify-between">
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
            <p className="text-[16px] leading-[100%] font-semibold text-[var(--second-text-color)]">
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
              className="my-[10px] block text-[25px] leading-[100%] font-black text-[var(--second-text-color)]"
            >
              0-800-000-000
            </a>
            <ul>
              {consultation.map(({ title, img: Image }) => (
                <li key={title} className="flex items-center gap-[5px]">
                  <span className="block h-[20px] w-[20px] text-[var(--second-text-color)]">
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

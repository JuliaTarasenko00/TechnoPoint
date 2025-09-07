import {
  techInformation,
  TTechInformation,
} from '../../../helpers/temporaryData/techInformation';

type TStyleList = {
  style: string;
  styleImg: string;
  position: string;
  bg: string;
};

interface TTechInformationWithStyle extends TTechInformation {
  style: string;
  styleImg: string;
  position: string;
  bg: string;
}

const styleList: Array<TStyleList> = [
  {
    position: 'col-span-2',
    bg: '',
    style: ' font-medium text-[49px] text-[var(--main-text-color)]  pl-[10%]',
    styleImg: 'left-[-5%] w-[200px] h-[200px]',
  },
  {
    position: '',
    bg: 'bg-[#ededed]',
    style:
      ' text-[18px] font-medium text-end  text-[var(--main-text-color)] text-[29px] pl-[10%] ',
    styleImg: 'left-[-27%] w-[200px] h-[200px]',
  },
  {
    position: '',
    bg: 'bg-[#353535]',
    style:
      ' font-light text-[29px] text-end text-[var(--second-text-color)]  pl-[10%]',
    styleImg: 'left-[-10%] w-[150px] h-[100px]',
  },
  {
    position: 'col-span-2 row-span-2',
    bg: 'bg-[#ededed]',
    style: ' text-[64px] font-light  text-start justify-start pr-[10%] ',
    styleImg: 'right-[-12%] w-[400px] h-[350px]',
  },
];

const techInformationWithStyle: TTechInformationWithStyle[] =
  techInformation.map((item, index) => ({
    ...item,
    style: styleList[index]?.style ?? '',
    styleImg: styleList[index]?.styleImg ?? '',
    position: styleList[index]?.position ?? '',
    bg: styleList[index]?.bg ?? '',
  }));

export const TechGallery: React.FC = () => {
  return (
    <section className="container px-4 py-4">
      <ul className="grid grid-flow-col grid-cols-4 grid-rows-[2fr] gap-[10px]">
        {techInformationWithStyle.map(
          (
            { name, img, description, style, styleImg, position, bg },
            index,
          ) => {
            const arrayWord = name.split(' ');
            const lastWord = arrayWord[arrayWord.length - 1];
            const firstPart = arrayWord
              .splice(0, arrayWord.length - 1)
              .join(' ');
            const lastItem = techInformationWithStyle.length - 1 === index;

            return (
              <li
                key={name}
                className={`${position} group relative min-h-[220px] w-full cursor-pointer rounded-2xl shadow-md`}
              >
                <div
                  className={`${bg} absolute h-full w-full rounded-2xl transition-transform duration-500 group-hover:scale-[1.015] group-focus:scale-[1.015]`}
                ></div>
                <div
                  className={`group relative z-10 flex h-full w-full items-center justify-end overflow-hidden px-[36px] text-balance ${style}`}
                >
                  <img
                    src={img}
                    alt={name}
                    width={260}
                    height={100}
                    className={`pointer-events-none absolute object-fill object-center transition-transform duration-700 group-hover:scale-[1.05] group-focus:scale-[1.05] ${styleImg}`}
                  />
                  <div className="z-10">
                    <h2 className="mb-[0.3em] leading-[87%]">
                      {firstPart}{' '}
                      <span className="font-medium">{lastWord}</span>
                    </h2>
                    <p className="max-w-[400px] text-[13px] leading-[170%] font-medium text-[#909090]">
                      {description}
                    </p>
                    {lastItem && (
                      <button className="transition-color mt-[16px] cursor-pointer rounded-[6px] border-1 border-[#353535] px-[56px] py-[16px] text-[16px] leading-[150%] font-medium text-[#353535] duration-500 ease-in-out hover:border-transparent hover:bg-[var(--dark-purple)] hover:text-[var(--second-text-color)] focus:border-transparent focus:bg-[var(--dark-purple)] focus:text-[var(--second-text-color)]">
                        Shop now
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

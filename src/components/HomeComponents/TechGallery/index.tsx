import {
  techInformation,
  TTechInformation,
} from "../../../helpers/temporaryData/techInformation";

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
    position: "col-span-2",
    bg: "",
    style: " font-medium text-[49px] text-[var(--main-text-color)]  pl-[10%]",
    styleImg: "left-[-5%] w-[200px] h-[200px]",
  },
  {
    position: "",
    bg: "bg-[#ededed]",
    style:
      " text-[18px] font-medium text-end  text-[var(--main-text-color)] text-[29px] pl-[10%] ",
    styleImg: "left-[-27%] w-[200px] h-[200px]",
  },
  {
    position: "",
    bg: "bg-[#353535]",
    style: " font-light text-[29px] text-end text-[#fff]  pl-[10%]",
    styleImg: "left-[-10%] w-[150px] h-[100px]",
  },
  {
    position: "col-span-2 row-span-2",
    bg: "bg-[#ededed]",
    style: " text-[64px] font-light  text-start justify-start pr-[10%] ",
    styleImg: "right-[-12%] w-[400px] h-[350px]",
  },
];

const techInformationWithStyle: TTechInformationWithStyle[] =
  techInformation.map((item, index) => ({
    ...item,
    style: styleList[index]?.style ?? "",
    styleImg: styleList[index]?.styleImg ?? "",
    position: styleList[index]?.position ?? "",
    bg: styleList[index]?.bg ?? "",
  }));

export const TechGallery: React.FC = () => {
  return (
    <section className="container px-4 py-4">
      <ul className="grid grid-rows-[2fr] gap-[10px] grid-cols-4 grid-flow-col">
        {techInformationWithStyle.map(
          (
            { name, img, description, style, styleImg, position, bg },
            index
          ) => {
            const arrayWord = name.split(" ");
            const lastWord = arrayWord[arrayWord.length - 1];
            const firstPart = arrayWord
              .splice(0, arrayWord.length - 1)
              .join(" ");
            const lastItem = techInformationWithStyle.length - 1 === index;

            return (
              <li
                key={name}
                className={`${position}  cursor-pointer rounded-2xl group relative w-full shadow-md min-h-[220px] `}
              >
                <div
                  className={`${bg} absolute w-full rounded-2xl h-full group-hover:scale-[1.015] transition-transform duration-500`}
                ></div>
                <div
                  className={`relative z-10 w-full group h-full justify-end overflow-hidden text-balance flex items-center px-[36px] ${style}`}
                >
                  <img
                    src={img}
                    alt={name}
                    width={260}
                    height={100}
                    className={`absolute object-fill object-center group-hover:scale-[1.05] pointer-events-none transition-transform duration-700 ${styleImg}`}
                  />
                  <div className="z-10 dark:text-white">
                    <h2 className=" leading-[87%] mb-[0.3em]">
                      {firstPart}{" "}
                      <span className=" font-medium">{lastWord}</span>
                    </h2>
                    <p className="text-[13px] font-medium text-[#909090] max-w-[400px] leading-[170%]">
                      {description}
                    </p>
                    {lastItem && (
                      <button className="text-[#353535] mt-[16px] px-[56px] py-[16px] text-[16px] leading-[150%] border-1 rounded-[6px] font-medium border-[#353535] transition-color ease-in-out duration-500 cursor-pointer hover:bg-[#522b5b] hover:border-transparent hover:text-[#fff]">
                        Shop now
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

type TOptionSelector = {
  brandOptions: Array<string>;
  productOptions: string;
};

export const OptionSelector = ({
  brandOptions,
  productOptions,
}: TOptionSelector) => {
  const sameOption = brandOptions.find((el) => el === productOptions);

  return (
    <div className="flex gap-[16px]">
      {brandOptions.map((option) => {
        return (
          <div
            key={option}
            className={`group flex h-[48px] w-[122px] cursor-pointer items-center justify-center rounded-[8px] border-[1px] transition-colors duration-350 ${sameOption === option ? 'border-[#000]' : 'border-[#d5d5d5] hover:border-[#585858]'}`}
          >
            <p
              className={`text-[14px] transition-colors duration-350 ${sameOption === option ? 'text-[#000]' : 'text-[#6f6f6f] group-hover:text-[#585858]'}`}
            >
              {option}
            </p>
          </div>
        );
      })}
    </div>
  );
};

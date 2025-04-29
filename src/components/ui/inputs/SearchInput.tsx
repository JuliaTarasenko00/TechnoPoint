import { FC, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import { categories } from "../../../helpers/temporaryData/categories";

interface PropsSearchInput extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const SearchInput: FC<PropsSearchInput> = ({
  errorMessage,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const nameCategory = categories.flatMap(({ category }) => [category, 1000]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" relative">
      {!isActive && rest.value === "" && (
        <TypeAnimation
          sequence={[...nameCategory, ""]}
          repeat={Infinity}
          style={{ fontSize: "16px", display: "inline-block" }}
          className=" absolute top-[50%] translate-y-[-50%] left-[46px] pointer-events-none text-[#989898] "
        />
      )}
      <input
        {...rest}
        id="search"
        type="text"
        onFocus={() => {
          setIsActive(true);
        }}
        className=" py-[16px] text-[var(--search-input-text)] bg-[var(--search-input-bg)]  dark:bg-[var(--search-input-bg-dark)] dark:text-[var(--search-input-text-dark)] rounded-[8px] w-[372px] h-[56px] outline-none  placeholder:text-[#989898]  placeholder:text-[16px] px-[48px]"
        ref={inputRef}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

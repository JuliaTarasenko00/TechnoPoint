import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { categories } from '../../../helpers/temporaryData/categories';
import { ErrorMessage } from '../ErrorMessage';

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {!isActive && rest.value === '' && (
        <TypeAnimation
          sequence={[...nameCategory, '']}
          repeat={Infinity}
          style={{ fontSize: '16px', display: 'inline-block' }}
          className="pointer-events-none absolute top-[50%] left-[46px] translate-y-[-50%] text-[#989898]"
        />
      )}
      <input
        {...rest}
        id="search"
        type="text"
        onFocus={() => {
          setIsActive(true);
        }}
        className="h-[56px] w-[372px] rounded-[8px] bg-[var(--search-input-bg)] px-[48px] py-[16px] text-[var(--search-input-text)] outline-none placeholder:text-[16px] placeholder:text-[#989898]"
        ref={inputRef}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

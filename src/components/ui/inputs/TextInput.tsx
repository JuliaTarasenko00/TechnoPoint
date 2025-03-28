import { FC, ForwardedRef, forwardRef } from "react";

interface TextInputProps {
  errorMessage?: string;
  placeholder?: string;
}

export const TextInput: FC<TextInputProps> = forwardRef(
  ({ errorMessage, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className=" relative">
        <input
          {...rest}
          type="text"
          placeholder={rest.placeholder}
          className=" py-[16px] text-[var(--search-input-text)] bg-[var(--search-input-bg)]  dark:bg-[var(--search-input-bg-dark)] dark:text-[var(--search-input-text-dark)] rounded-[8px] w-[372px] h-[56px] outline-none  placeholder:text-[#989898]  placeholder:text-[16px] px-[48px]"
          ref={_ref}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

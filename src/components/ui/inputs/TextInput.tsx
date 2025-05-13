import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const TextInput: FC<TextInputProps> = forwardRef(
  ({ errorMessage, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className=" relative">
        <input
          {...rest}
          type="text"
          className=" p-[16px] text-[var(--search-input-text)] bg-[var(--component-background)] rounded-[8px] w-full h-[48px] outline-none  placeholder:text-[#989898]  placeholder:text-[16px] "
          ref={_ref}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

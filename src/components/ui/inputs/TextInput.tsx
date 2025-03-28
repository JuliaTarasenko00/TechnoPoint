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
          className=" px-[16px] bg-[#f5f5f5] rounded-[8px] w-[372px] h-[56px] outline-none pr-[16px] placeholder:text-[#656565] placeholder:text-[14px] placeholder:opacity-[0.5] pl-[48px]"
          ref={_ref}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

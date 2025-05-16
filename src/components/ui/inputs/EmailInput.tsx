//@ts-ignore

import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { FiX } from "react-icons/fi";

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  reset: any;
}

export const EmailInput: FC<EmailInputProps> = forwardRef(
  ({ errorMessage, reset, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <div className=" relative">
          <input
            {...rest}
            type="email"
            ref={_ref}
            className={`peer ${
              errorMessage
                ? " border-[var(--error-color)] focus:border-[var(--error-color)"
                : "border-transparent focus:border-[var(--dark-purple)]"
            } border-[1px] bg-[var(--component-background)] p-[10px_13px]  block w-full rounded-[22px] `}
          />
          <button
            onClick={() => reset(rest.name)}
            type="reset"
            className="peer-focus:opacity-[1] peer-focus:pointer-events-auto pointer-events-none peer-focus:cursor-pointer opacity-0  absolute top-[50%] right-[16px] translate-y-[-50%] transition-opacity"
          >
            <FiX className=" w-[24px] h-[24px] pl-[7px] border-l-[1px] border-l-[#989898]" />
          </button>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }
);

EmailInput.displayName = "EmailInput";

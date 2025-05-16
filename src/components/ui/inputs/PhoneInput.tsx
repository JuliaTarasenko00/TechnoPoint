//@ts-ignore

import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { IMaskInput, IMaskMixin } from "react-imask";
import { FiX } from "react-icons/fi";
import { ErrorMessage } from "../ErrorMessage";

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  reset: any;
}

const MaskInput = IMaskMixin(({ errorMessage, inputRef, ...props }) => (
  <IMaskInput
    {...props}
    mask={"+{38\\0} #0 000 0000"}
    ref={inputRef}
    definitions={{ "#": /[5,6,7,8,9]/ }}
    className={`peer ${
      errorMessage
        ? " border-[var(--error-color)] focus:border-[var(--error-color)"
        : "border-transparent focus:border-[var(--dark-purple)]"
    } border-[1px] bg-[var(--component-background)] p-[10px_13px]  block w-full rounded-[22px] `}
  />
));

export const PhoneInput: FC<PhoneInputProps> = forwardRef(
  ({ errorMessage, reset, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <div className=" relative">
          <MaskInput {...rest} inputRef={_ref} errorMessage={errorMessage} />
          <button
            onClick={() => reset(rest.name as string)}
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

PhoneInput.displayName = "PhoneInput";

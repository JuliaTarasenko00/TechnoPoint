//@ts-ignore

import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { IMaskInput, IMaskMixin } from 'react-imask';
import { FiX } from 'react-icons/fi';
import { ErrorMessage } from '../ErrorMessage';

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  reset: any;
}

const MaskInput = IMaskMixin(({ errorMessage, inputRef, ...props }) => (
  <IMaskInput
    {...props}
    mask={'+{38\\0} #0 000 0000'}
    ref={inputRef}
    definitions={{ '#': /[5,6,7,8,9]/ }}
    className={`peer ${
      errorMessage
        ? 'focus:border-[var(--error-color) border-[var(--error-color)]'
        : 'border-transparent focus:border-[var(--dark-purple)]'
    } block w-full rounded-[22px] border-[1px] bg-[var(--component-background)] p-[10px_13px]`}
  />
));

export const PhoneInput: FC<PhoneInputProps> = forwardRef(
  ({ errorMessage, reset, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <div className="relative">
          <MaskInput {...rest} inputRef={_ref} errorMessage={errorMessage} />
          <button
            onClick={() => reset(rest.name as string)}
            type="reset"
            className="pointer-events-none absolute top-[50%] right-[16px] translate-y-[-50%] opacity-0 transition-opacity peer-focus:pointer-events-auto peer-focus:cursor-pointer peer-focus:opacity-[1]"
          >
            <FiX className="h-[24px] w-[24px] border-l-[1px] border-l-[#989898] pl-[7px]" />
          </button>
        </div>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  },
);

PhoneInput.displayName = 'PhoneInput';

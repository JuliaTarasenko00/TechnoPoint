//@ts-ignore

import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { ErrorMessage } from '../ErrorMessage';
import { FiX } from 'react-icons/fi';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  reset: any;
}

export const EmailInput: FC<EmailInputProps> = forwardRef(
  ({ errorMessage, reset, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <div className="relative">
          <input
            {...rest}
            type="email"
            ref={_ref}
            className={`peer ${
              errorMessage
                ? 'focus:border-[var(--error-color) border-[var(--error-color)]'
                : 'border-transparent focus:border-[var(--dark-purple)]'
            } block w-full rounded-[22px] border-[1px] bg-[var(--component-background)] p-[10px_13px]`}
          />
          <button
            onClick={() => reset(rest.name)}
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

EmailInput.displayName = 'EmailInput';

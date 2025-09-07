//@ts-ignore

import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { ErrorMessage } from '../ErrorMessage';
import { FiX } from 'react-icons/fi';

interface UserNameInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  reset: any;
}

export const UserNameInput: FC<UserNameInputProps> = forwardRef(
  ({ errorMessage, reset, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    const name = rest.name;

    return (
      <>
        <div className="relative">
          <input
            {...rest}
            type="text"
            ref={_ref}
            className={`peer ${
              errorMessage
                ? 'focus:border-[var(--error-color) border-[var(--error-color)]'
                : 'border-transparent focus:border-[var(--dark-purple)]'
            } block w-full rounded-[22px] border-[1px] bg-[var(--component-background)] p-[10px_13px]`}
          />
          <button
            onClick={() => reset(name as string)}
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

UserNameInput.displayName = 'UserNameInput';

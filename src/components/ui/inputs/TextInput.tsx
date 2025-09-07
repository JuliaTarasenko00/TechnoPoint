import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { ErrorMessage } from '../ErrorMessage';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const TextInput: FC<TextInputProps> = forwardRef(
  ({ errorMessage, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="relative">
        <input
          {...rest}
          type="text"
          className="h-[48px] w-full rounded-[8px] bg-[var(--component-background)] p-[16px] text-[var(--search-input-text)] outline-none placeholder:text-[16px] placeholder:text-[#989898]"
          ref={_ref}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';

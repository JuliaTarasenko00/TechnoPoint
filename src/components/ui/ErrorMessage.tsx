import { ReactNode } from 'react';

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return (
    <p className="relative text-[13.5px] leading-[16px] tracking-[0.4] text-[var(--error-color)]">
      {children}
    </p>
  );
};

import { ReactNode } from "react";

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return (
    <p className="relative text-[var(--error-color)] text-[13.5px] leading-[16px] tracking-[0.4]">
      {children}
    </p>
  );
};

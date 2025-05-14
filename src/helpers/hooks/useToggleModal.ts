import { useEffect, useState } from "react";

export const useToggleModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return { isOpen, handleToggle: () => setIsOpen((prev) => !prev) };
};

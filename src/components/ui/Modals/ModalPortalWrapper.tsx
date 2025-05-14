import { FC, MouseEvent, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalPortalWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const modalContentEl: HTMLElement | null = document.getElementById("modal");

export const ModalPortalWrapper: FC<ModalPortalWrapperProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const handleClickOverlay = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscClick = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscClick);

    return () => window.removeEventListener("keydown", handleEscClick);
  }, [onClose]);

  return createPortal(
    <dialog
      open
      onClick={handleClickOverlay}
      className={`${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-500 fixed z-100 w-full h-[100vh] overflow-hidden bg-[#0006] outline-0 right-0 left-0 bottom-0 top-0`}

      // className=" opacity-0 open:opacity-[1] open:pointer-events-auto transition-opacity duration-500 fixed z-100 w-full h-[100vh] pointer-events-none overflow-hidden backdrop:bg-[#0006] outline-0 right-0 left-0 bottom-0 top-0"
    >
      <div className=" absolute z-110 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] p-[40px] max-w-max rounded-3xl bg-[#fff]">
        {children}
      </div>
    </dialog>,
    modalContentEl as HTMLElement
  );
};

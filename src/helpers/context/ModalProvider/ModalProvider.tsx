import { createContext, MouseEvent, ReactNode, useRef, useState } from "react";

export type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    setContent(content);
    document.body.style.overflow = "hidden";
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";

    modalRef.current?.close();
  };

  const clickOutside = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <dialog
        ref={modalRef}
        onClose={closeModal}
        onClick={clickOutside}
        id="dialog"
        className=" m-auto rounded-xl bg-white p-6 shadow-3xl  backdrop:backdrop-blur-xs  transition-opacity duration-500"
      >
        {content}
      </dialog>
    </ModalContext.Provider>
  );
};

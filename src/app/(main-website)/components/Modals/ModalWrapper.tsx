"use client";

import { useState, ReactNode } from "react";
import Modal from "./modal";

type ModalWrapperProps = {
  trigger: ReactNode; // The element that opens the modal
  children: ReactNode; // Modal content
};

export default function ModalWrapper({ trigger, children }: ModalWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
}

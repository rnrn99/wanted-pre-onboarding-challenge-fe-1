import { Background, ModalContainer } from "./Modal.style";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

function Modal({ children, open, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <>
      <Background onClick={onClose} />
      <ModalContainer>{children}</ModalContainer>
    </>
  );
}

export default Modal;

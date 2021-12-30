import { useEffect, useState } from "react";

const Modal = ({ show, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>
  ) : null;

  return isBrowser === true
    ? ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))
    : null;
};

export default Modal;

// https://devrecipes.net/modal-component-with-next-js/

import { useEffect, useState } from "react";

const Modal = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBrowser === true
    ? ReactDOM.createPortal(
        <div>Hello, this is a modal</div>,
        document.getElementById("modal-root")
      )
    : null;
};

export default Modal;

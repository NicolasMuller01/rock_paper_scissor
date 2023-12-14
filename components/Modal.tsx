import React, { useEffect } from "react";

const Modal = ({
  isOpen,
  winner,
  onClose,
}: {
  isOpen: any;
  winner: any;
  onClose: any;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="relative w-auto max-w-md mx-auto my-6">
        {/* Contenido del modal */}
        <div className="relative bg-white p-20 rounded-lg">
          <p className="text-center text-xl font-semibold mb-4">{winner}</p>
          <button
            className="block w-full px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;

// Modal.jsx
import React from "react";
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-[1000px] max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 flex justify-end p-2">
          {/* Botão de fechar */}
          <button onClick={onClose} className="text-xl bg-neutral-300 hover:bg-neutral-400 p-1 rounded-md">
            <AiOutlineClose />
          </button>
        </div>
        {/* Conteúdo do modal */}
        <div className="">
          {children}
        </div>
      </div>
    </div>
    
  );
};

export default Modal;

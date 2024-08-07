// Modal.jsx
import React, { useEffect } from "react";
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    // Adiciona a classe quando o modal está aberto
    document.body.classList.add('overflow-hidden');

    // Remove a classe quando o modal é fechado
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg w-[1000px] max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 flex justify-end p-0">
          {/* Botão de fechar */}
          <button onClick={onClose} className="text-xl bg-neutral-500 hover:bg-neutral-700 p-1 text-white rounded-md">
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

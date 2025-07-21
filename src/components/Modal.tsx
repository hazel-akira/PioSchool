// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  show: boolean;
  logoSrc: string;
  title: string;
  imageSrc: string;
  onClose: () => void;
  onConfirm?: () => void;
  enquiryUrl: string; // Added enquiryUrl prop
}

const Modal: React.FC<ModalProps> = ({
  show,
  logoSrc,
  title,
  imageSrc,
  onClose,
  onConfirm,
  enquiryUrl, // Destructure enquiryUrl
}) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src={logoSrc}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
        </div>

        {/* Full-width Image */}
        <div className="w-full">
          <img
            src={imageSrc}
            alt="Modal Content"
            className="w-full h-[60vh] object-contain"
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
          >
            Close
          </button>
          <a
            href={enquiryUrl}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

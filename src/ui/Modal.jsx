const Modal = ({ setShowModal, showModal, children }) => {
  if (!showModal) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[25rem]  flex flex-col rounded-lg">
        <button
          className="text-white text-xl place-self-end bg-none m-3 px-5"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <div className="bg-white-p-2 flex flex-col items-center justify-center gap-2 bg-white min-h-[250px] rounded-lg overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

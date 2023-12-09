const Modal = ({ setShowModal, showModal, children }) => {
  if (!showModal) return null;

  const handleClose = (e) => {
    if (e.target.id === "content") setShowModal(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="content"
    >
      <div className="w-[20rem] md:w-[30rem] flex flex-col rounded-lg">
        <h1
          className="text-white text-xl place-self-end bg-none my-3 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          X
        </h1>
        <div className="bg-white-p-2 flex flex-col items-center justify-center gap-2 bg-white min-h-[250px] rounded-lg overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

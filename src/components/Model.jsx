const Modal = ({ showModal, setShowModal, product, addToCart }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover mb-4"
        />
        <p className="text-gray-700 mb-4">${product.price}</p>
        <p className="mb-6">{product.description}</p>

        <div className="flex justify-between">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              addToCart();
              setShowModal(false);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Confirm Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

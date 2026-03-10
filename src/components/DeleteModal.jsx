function DeleteModal({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">

        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Confirm Delete
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          {message}
        </p>

        <div className="flex justify-center gap-4">
          
          <button
            onClick={onCancel}
            className="px-4 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeleteModal;
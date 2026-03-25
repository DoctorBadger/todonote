import { useDispatch } from "react-redux";
import { deleteUserRequest, updateUserRequest } from "../app/userSlice";

const UserCard = ({ user, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col p-6 border mb-3 w-75 rounded-2xl shadow-lg shadow-gray-300">
      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <p>Age: {user.age}</p>
      <p>Gender: {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</p>
      <p>Card: {user.bank?.cardNumber || "N/A"}</p>

      <div className="flex gap-2 mt-2 justify-center">
        <button onClick={onEdit} className="p font-bold mt-6 px-4 py-2 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer">
          Edit
        </button>

        <button
          onClick={() => dispatch(deleteUserRequest(user.id))}
          className="p font-bold mt-6 px-4 py-2 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

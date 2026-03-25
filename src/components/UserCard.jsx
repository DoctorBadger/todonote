import { useDispatch } from "react-redux";
import {
  deleteUserRequest,
  updateUserRequest,
} from "../app/userSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded mb-3">
      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Card: {user.bank?.cardNumber || "N/A"}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() =>
            dispatch(
              updateUserRequest({
                id: user.id,
                firstName: "Updated",
              })
            )
          }
          className="text-blue-500 text-sm"
        >
          Update
        </button>

        <button
          onClick={() =>
            dispatch(deleteUserRequest(user.id))
          }
          className="text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
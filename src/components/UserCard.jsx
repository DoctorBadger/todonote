import { useDispatch } from "react-redux";
import { deleteUserRequest, updateUserRequest } from "../app/userSlice";

const UserCard = ({ user, onEdit }) => {
  const dispatch = useDispatch();

  const getOs = () => {
    if (!user.userAgent) return "Unknown";
    if (user.userAgent.includes("Windows")) return "Windows";
    if (user.userAgent.includes("Macintosh")) return "Mac";
    if (user.userAgent.includes("Android")) return "Android";
    if (user.userAgent.includes("iPhone") || user.userAgent.includes("iPad"))
      return "iOS";
    if (user.userAgent.includes("Linux")) return "Linux";
    return "Other";
  };

  const os = getOs();

  return (
    <div className="flex flex-col justify-between p-6 border mb-3 w-full rounded-2xl shadow-lg shadow-gray-300">
      <div>
        <div className="inline-flex gap-3 mb-2">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <span
            className={`flex px-2 py-1 text-xs rounded-full font-medium ${
              os === "Mac"
                ? "bg-gray-200 text-black"
                : os === "Windows"
                  ? "bg-blue-100 text-blue-700"
                  : os === "Android"
                    ? "bg-green-100 text-green-700"
                    : os === "iOS"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-gray-100 text-gray-500"
            }`}
          >
            {os}
          </span>
        </div>
        <p>Age: {user.age}</p>
        <p>
          Gender: {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
        </p>
        <p>Card: {user.bank?.cardNumber || "N/A"}</p>
        <p>IP: {user.ip || "N/A"}</p>
        <p>
          Location:{" "}
          {user.address
            ? `${user.address.city}, ${user.address.country}`
            : "N/A"}
        </p>
      </div>

      <div className="flex gap-2 mt-2 justify-center">
        <button
          onClick={onEdit}
          className="p font-bold mt-6 px-4 py-2 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer"
        >
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

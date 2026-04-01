import { useDispatch } from "react-redux";
import { deleteUserRequest } from "../app/userSlice";
import { useState } from "react";
import { a, useSpring } from "@react-spring/web";

const UserCard = ({ user, onEdit }) => {
  const dispatch = useDispatch();
  const [flipped, setFlipped] = useState(false);

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

  const { transform } = useSpring({
    transform: `rotateY(${flipped ? 180 : 0}deg) translateZ(0)`,
    config: { duration: 300 },
  });

  return (
    <div
      className="w-full max-w-10/12 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <a.div
        style={{
          transform,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-[260px] will-change-transform"
      >
        {/* FRONT SIDE */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full rounded-2xl shadow-2xl bg-white overflow-hidden"
        >

          {user.gender === "male" && (
            <div className="relative h-32.5 w-full overflow-hidden">
              <img
                src="/vitaly-gariev-grbDcbyo9nU-unsplash.jpg"
                alt="user visual"
                className="w-full h-full object-cover object-center"
              />

              <span
                className={`absolute top-4 left-0 px-3 py-1 text-xs font-medium shadow ${
                  os === "Mac"
                    ? "bg-gray-200 text-black border border-gray-300"
                    : os === "Windows"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : os === "Android"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : os === "iOS"
                          ? "bg-purple-100 text-purple-700 border border-purple-300"
                          : "bg-gray-100 text-gray-500 border border-gray-200"
                }`}
              >
                {os}
              </span>
            </div>
          )}

          {user.gender === "female" && (
            <div className="relative h-32.5 w-full overflow-hidden">
              <img
                src="/christina-wocintechchat-com-m-0Zx1bDv5BNY-unsplash.jpg"
                alt="user visual"
                className="w-full h-75 object-cover object-center"
              />

              <span
                className={`absolute top-4 left-0 px-3 py-1 text-xs font-medium shadow ${
                  os === "Mac"
                    ? "bg-gray-200 text-black border border-gray-300"
                    : os === "Windows"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : os === "Android"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : os === "iOS"
                          ? "bg-purple-100 text-purple-700 border border-purple-300"
                          : "bg-gray-100 text-gray-500 border border-gray-200"
                }`}
              >
                {os}
              </span>
            </div>
          )}

          <div className="px-6 h-32.5 justify-between ">
            {user.gender !== "male" && (
              <span
                className={`absolute top-4 left-0 px-3 py-1 text-xs font-medium ${
                  os === "Mac"
                    ? "bg-gray-200 text-black border border-gray-300"
                    : os === "Windows"
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : os === "Android"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : os === "iOS"
                          ? "bg-purple-100 text-purple-700 border border-purple-300"
                          : "bg-gray-100 text-gray-500 border border-gray-200"
                }`}
              >
                {os}
              </span>
            )}

            <h2 className="font-semibold pr-6 mt-2">
              {user.firstName} {user.lastName}
            </h2>

            <div>
              <p>Age: {user.age}</p>
              <p>
                Gender:{" "}
                {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
              </p>
              <p>IP: {user.ip || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute w-full h-full p-6 rounded-2xl shadow-2xl bg-white flex flex-col justify-between"
        >

          <span
            className={`absolute top-0 left-0 px-3 py-1 text-xs font-medium ${
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


          <div>
            <p>Card: {user.bank?.cardNumber || "N/A"}</p>
            <p>
              Location:{" "}
              {user.address
                ? `${user.address.city}, ${user.address.country}`
                : "N/A"}
            </p>
          </div>

          <div className="flex gap-2 justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              className="px-4 py-2 bg-[#dfecc6] rounded-full hover:bg-[#485C11] hover:text-white transition"
            >
              Edit
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteUserRequest(user.id));
              }}
              className="px-4 py-2 bg-[#dfecc6] rounded-full hover:bg-[#485C11] hover:text-white transition"
            >
              Delete
            </button>
          </div>
        </div>
      </a.div>
    </div>
  );
};

export default UserCard;

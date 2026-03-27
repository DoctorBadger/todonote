import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest, addUserRequest, updateUserRequest } from "../app/userSlice";
import UserCard from "../components/UserCard";
import UserModal from "../components/UserModal";

const Admin = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const handleSubmit = (data) => {
    if (editUser) {
      dispatch(updateUserRequest(data));
    } else {
      dispatch(addUserRequest(data));
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 px-5">
        <p></p>
        <h1 className="text-xl mb-4 text-center">Admin Dashboard</h1>

        <button
          onClick={() => {
            setEditUser(null);
            setOpen(true);
          }}
          className="p font-bold px-5 py-2 bg-[#dfecc6] text-[#000000] rounded-full hover:text-white hover:bg-[#485C11] hover:opacity-70 cursor-pointer"
        >
          Add User
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="flex flex-row flex-wrap justify-between px-5 gap-5">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={() => {
              setEditUser(user);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <UserModal
        open={open}
        handleClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        editUser={editUser}
      />
    </div>
  );
};

export default Admin;

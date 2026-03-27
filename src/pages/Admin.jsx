import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersRequest,
  addUserRequest,
  updateUserRequest,
} from "../app/userSlice";
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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 px-2 sm:px-5">
        <p></p>
        <h1 className="text-lg sm:text-xl text-center sm:text-left">
          Admin Dashboard
        </h1>

        <button
          onClick={() => {
            setEditUser(null);
            setOpen(true);
          }}
          className="fixed top-4 right-8 z-50 
             px-3 py-2 rounded-full 
             bg-[#dfecc6] text-black font-bold 
             shadow-lg hover:bg-[#485C11] hover:text-white 
             transition-all duration-200"
        >
          + Add User
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div
        className="px-2 sm:px-5 grid gap-4 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4"
      >
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

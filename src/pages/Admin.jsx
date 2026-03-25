import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersRequest,
  addUserRequest,
} from "../app/userSlice";
import UserCard from "../components/UserCard";

const Admin = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Admin Dashboard</h1>

      <button
        onClick={() =>
          dispatch(
            addUserRequest({
              firstName: "New",
              lastName: "User",
              age: 25,
              gender: "male",
            })
          )
        }
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add User
      </button>

      {loading && <p>Loading...</p>}

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Admin;
import AuthLayout from "../components/AuthLayout";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { reset } from "../app/authSlice";

function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const email = location.state?.email;

  function validatePassword(password) {
    const pattern =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

    return pattern.test(password);
  }

  function handleReset() {
    if(!validatePassword(password)){
      toast.error("Password must be atleast 8 characters, have one uppercase and one special character")
    }
    if (password === confirm) {
      toast.success("Password reset successful");
      dispatch(
        reset({
          email: email,
          password: password,
        }),
      );
      navigate("/login");
      return;
    }
    if (!email) {
      toast.error("missing email");
      navigate("/forgotpassword");
      return;
    } else {
      toast.error("Passwords do not match!");
      return;
    }
  }

  return (
    <AuthLayout>
      <h1 className="text-3xl font-medium mb-4">Create a New Password</h1>

      <label className="text-sm text-medium">New Password</label>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded-lg p-2 mt-1 mb-4 outline-none focus:ring-2 focus:ring-green-600 border-gray-400 drop-shadow-2xl opacity-50"
        placeholder="Enter your password"
      />

      <label className="text-sm text-medium">Repeat New Password</label>

      <input
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="w-full border rounded-lg p-2 mt-1 mb-4 outline-none focus:ring-2 focus:ring-green-600 border-gray-400 drop-shadow-2xl opacity-50"
        placeholder="Enter your password"
      />

      <button
        onClick={handleReset}
        className="w-full bg-[#3A5B22] text-white py-2 rounded-lg hover:bg-green-900 transition mb-6"
      >
        Submit
      </button>

      <div className="flex items-center mb-6">
        <div className="grow h-px bg-gray-300"></div>
        <span className="px-3 text-medium text-xs">Or</span>
        <div className="grow h-px bg-gray-300"></div>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="flex items-center justify-center gap-2 border rounded-lg py-2 w-full hover:bg-gray-50 bg-white bg-blend-color border-gray-300 drop-shadow-2xl ">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-4 h-4"
          />
          <span className="text-sm text-medium">Sign in with Google</span>
        </button>

        <button className="flex items-center justify-center gap-2 border rounded-lg py-2 w-full hover:bg-gray-50 bg-white bg-blend-color border-gray-300 drop-shadow-2xl ">
          <img
            src="https://www.svgrepo.com/show/511330/apple-173.svg"
            className="w-4 h-4"
          />
          <span className="text-sm text-medium">Sign in with Apple</span>
        </button>
      </div>

      <p className="text-xs text-black text-center">
        Don't have an account?
        <Link className="text-[#0C2A92] font-medium ml-1" to="/">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
}

export default ResetPassword;

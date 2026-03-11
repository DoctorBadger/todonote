import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function validatePassword(password) {
    const pattern =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    return pattern.test(password);
  }

  function handleLogin() {
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must be 8 characters with uppercase, number and special character",
      );
      return;
    }

    dispatch(login({ email, password }));
  }

  useEffect(() => {
    if (currentUser) {
      toast.success("Login Successful");
      navigate("/dashboard");
    }

    if (error) {
      toast.error(error);
    }
  }, [currentUser, error, navigate]);

  return (
    <AuthLayout>
      <h1 className="text-3xl font-medium mb-4">Welcome back!</h1>

      <p className="text-medium text-sm mb-14">
        Enter your credentials to access your account
      </p>

      <label className="text-sm text-medium">Email address</label>

      <input
        className="w-full border rounded-lg p-2 mt-1 mb-4 outline-none focus:ring-2 focus:ring-green-600 border-gray-400 drop-shadow-2xl opacity-50"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex justify-between items-center mb-1">
        <label className="text-xs text-medium">Password</label>

        <Link
          to="/forgotpassword"
          className="text-xs font-medium text-[#0C2A92]"
        >
          forgot password
        </Link>
      </div>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded-lg p-2 mt-1 mb-4 border-gray-400 drop-shadow-2xl outline-none focus:ring-2 focus:ring-green-600 opacity-50"
        placeholder="Enter your password"
      />

      <div className="flex items-center mb-5">
        <input type="checkbox" className="mr-2 accent-green-700" />
        <p className="text-xs text-medium">Remember for 30 days</p>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-[#3A5B22] text-white py-2 rounded-lg hover:bg-green-900 transition mb-6"
      >
        Login
      </button>

      <div className="flex items-center mb-6">
        <div className="grow h-px bg-gray-300"></div>
        <span className="px-3 text-medium text-xs">Or</span>
        <div className="grow h-px bg-gray-300"></div>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="flex items-center justify-center gap-2 border rounded-lg py-2 w-full hover:bg-gray-50 bg-white border-gray-300 drop-shadow-2xl">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-4 h-4"
          />
          <span className="text-sm text-medium">Sign in with Google</span>
        </button>

        <button className="flex items-center justify-center gap-2 border rounded-lg py-2 w-full hover:bg-gray-50 bg-white border-gray-300 drop-shadow-2xl">
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

export default Login;

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signup } from "../app/authSlice";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();

  function handleSignup() {
    if (!name.trim()) {
      return toast.error("Please enter your name");
    }
    if (!email.trim()) {
      return toast.error("Please enter your email");
    }
    if (!password.trim()) {
      return toast.error("Please enter your passwords");
    }
    if (!remember) {
      return toast.error("Please agree to the terms and policy");
    }

    dispatch(signup({name, email, password}));

    toast.success("Account Created Successfully");

    navigate("/login");
  }

  return (
    <AuthLayout>
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-medium mb-8">Get Started Now</h1>

        <label className="text-sm text-medium">Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          className="w-full border rounded-lg p-2 mt-1 mb-4 border-gray-400 drop-shadow-2xl outline-none focus:ring-2 focus:ring-green-600 opacity-50"
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text-sm text-medium">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border rounded-lg p-2 mt-1 mb-4 outline-none focus:ring-2 focus:ring-green-600 border-gray-400 drop-shadow-2xl opacity-50"
        />

        <label className="text-sm text-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full border rounded-lg p-2 mt-1 mb-4 border-gray-400 drop-shadow-2xl outline-none focus:ring-2 focus:ring-green-600 opacity-50"
        />

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="mr-2 w-4 h-4  rounded "
          />
          <p className="text-xs text-medium">
            I agree to the <u>terms & policy</u>
          </p>
        </div>

        <button
          onClick={handleSignup}
          className="w-full bg-[#3A5B22] text-white py-2 rounded-lg hover:bg-green-900 transition mb-6"
        >
          Signup
        </button>

        <div className="flex items-center mb-6">
          <div className="grow h-px bg-gray-300"></div>
          <span className="px-3 text-black text-sm">Or</span>
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

          <button className="flex items-center justify-center gap-2 border rounded-lg  py-2 w-full hover:bg-gray-50 bg-white bg-blend-color border-gray-300 drop-shadow-2xl">
            <img
              src="https://www.svgrepo.com/show/511330/apple-173.svg"
              className="w-4 h-4"
            />
            <span className="text-sm text-medium">Sign in with Apple</span>
          </button>
        </div>

        <p className="text-xs text-center">
          Have an account?
          <Link to="/login" className="text-[#0C2A92] font-medium ml-1">
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Signup;

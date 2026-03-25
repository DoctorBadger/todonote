import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signup } from "../app/authSlice";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function validatePassword(password) {
    const pattern =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;

    return pattern.test(password);
  }

  function handleSignup(e) {
    e.preventDefault();

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

    dispatch(
      signup({
        name: name,
        email: email,
        password: password,
      }),
    );

    toast.success("Account Created Successfully");

    navigate("/login");
  }

  return (
    <AuthLayout>
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-medium mb-8">Get Started Now</h1>
        <form onSubmit={handleSignup}>
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  sx={{
                    padding: 0,
                    marginRight: "2px",
                    color: "#15803d",
                    "&.Mui-checked": {
                      color: "#15803d",
                    },
                  }}
                />
              }
              label={
                <span>
                  I agree to the <u>terms & policy</u>
                </span>
              }
              sx={{
                margin: 0,
                "& .MuiFormControlLabel-label": {
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "0.75rem",
                  lineHeight: 1.5,
                  fontWeight: 500,
                },
              }}
            />
          </div>

          <button
            onClick={handleSignup}
            className="w-full bg-[#3A5B22] text-white py-2 rounded-lg hover:bg-green-900 transition mb-6"
          >
            Signup
          </button>
        </form>
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

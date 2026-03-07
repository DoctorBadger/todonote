import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

function Signup() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-medium mb-8">Get Started Now</h1>

        <label className="text-sm text-medium">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border rounded-lg p-2 mt-1 mb-4 border-gray-400 drop-shadow-2xl outline-none focus:ring-2 focus:ring-green-600 opacity-50"
        />

        <label className="text-sm text-medium">Email address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded-lg p-2 mt-1 mb-4 outline-none focus:ring-2 focus:ring-green-600 border-gray-400 drop-shadow-2xl opacity-50"
        />

        <label className="text-sm text-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border rounded-lg p-2 mt-1 mb-4 border-gray-400 drop-shadow-2xl outline-none focus:ring-2 focus:ring-green-600 opacity-50"
        />

        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2 w-4 h-4  rounded " />
          <p className="text-xs text-medium">I agree to the <u>terms & policy</u></p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
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

        <p className="text-sm text-medium text-center">
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

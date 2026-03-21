import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Todos from "../pages/todos";
import ForgotPassword from "../pages/forgotpassword";
import ResetPassword from "../pages/resetpassword";
import Pdf from "../pages/pdf";
import ContactUs from "../pages/contactus";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/pdf" element={<Pdf />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todos" element={<Todos />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

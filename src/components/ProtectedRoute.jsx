import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  if(!currentUser){
    return <Navigate to="/"/>
  }
  return <Outlet/>
}

export default ProtectedRoute;

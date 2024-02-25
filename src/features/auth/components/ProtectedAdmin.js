import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

function ProtectedAdmin(children) {
  // const navigate = useNavigate()

  const user = useSelector(selectLoggedInUser);

  if (!user) {
    <Navigate to="/login" replace={true}></Navigate>;
  }
  if (user && user.role !== "admin") {
    <Navigate to="/" replace={true}></Navigate>;
  }
  // return (
  //     user ? <Outlet /> : <Navigate to="/login" />
  // )
  return children;
}

export default ProtectedAdmin;

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

function Protected(children) {
  // const navigate = useNavigate()

  const user = useSelector(selectLoggedInUser);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;

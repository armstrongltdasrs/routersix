import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isUserLogin = localStorage.getItem("isLogin");
  return isUserLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

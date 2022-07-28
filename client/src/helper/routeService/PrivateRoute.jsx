import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserDetail } from "../context/userContext";

const PrivateRoute = () => {
  const { userId, userName, userAvatar, islogin } = useContext(UserDetail);

  // console.log(userId, userName, userAvatar);

  return islogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

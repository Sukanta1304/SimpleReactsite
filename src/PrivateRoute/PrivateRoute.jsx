import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

export default function PrivateRoute({ children }) {
  const { Auth } = useContext(AuthContext);
  if (!Auth.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

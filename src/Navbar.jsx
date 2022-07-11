import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/Authcontext";

export default function Navbar() {
  const { Auth, handleLogin, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlebutton = () => {
    if (Auth.isAuth) {
      handleLogout();
    } else {
      navigate("/login");
    }
  };
  return (
    <div style={{ display: "flex", gap: "15px", margin: "auto" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/settings">Settings</Link>
      <button onClick={handlebutton}>{Auth.isAuth ? "Logout" : "Login"}</button>
    </div>
  );
}

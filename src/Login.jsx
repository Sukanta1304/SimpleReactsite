import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "./Context/Authcontext";

export default function Login() {
  const { Auth, handleLogin } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({});
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };
  const postLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("https://reqres.in/api/login", loginData);
    if (data.token) {
      // setLoginData(data);
      handleLogin(data.token);
    }
  };

  return (
    <div>
      <div>
        {Auth.isAuth ? (
          <div>
            <h1>Logged in </h1>
            <h1>Token:{Auth.token}</h1>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={postLogin}>
              <input
                type="text"
                name="email"
                placeholder="Enter Registerd Email"
                onChange={handleOnchange}
              />
              <input
                type="text"
                name="password"
                placeholder="Enter password"
                onChange={handleOnchange}
              />
              <input type="submit" value="Login" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

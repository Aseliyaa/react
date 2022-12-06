import { useCallback, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../components/userContext";
import InfoInput from "../components/InfoInput";
function Login() {
  const navigate = useNavigate();
  const userContext = useUserContext();

  const [email, setEmail] = useState("");
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

  const [password, setPassword] = useState("");
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const handleLogin = useCallback(() => {
    fetch(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          userContext.setUser(users[0]);
        } else {
          alert("User data invalid");
        }
      });
  }, [email, password, userContext]);

  useEffect(() => {
    if (userContext.user?.email) {
      navigate("/about");
    }
  }, [userContext.user, navigate]);

  return (
    <div className="flex flex-col items-center gap-1 mt-10">
      <div className="text-4xl mt-16 font-medium">Log in</div>

      <InfoInput
        type1="email"
        type2="password"
        placeholder1="email"
        value1={email}
        onChange1={handleSetEmail}
        placeholder2="password"
        value2={password}
        onChange2={handleSetPassword}
      />

      <div className="flex flex-col items-center">
        <button
          className="text-2xl bg-stone-200 py-3 px-16 mt-6 mb-2"
          onClick={handleLogin}
        >
          Log in
        </button>
        <Link to="/register">Don't have an account? Register</Link>
      </div>
    </div>
  );
}

export default Login;

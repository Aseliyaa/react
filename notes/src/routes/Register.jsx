import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoInput from "../components/InfoInput";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

  const [password, setPassword] = useState("");
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const [repeatPass, setRepeatPass] = useState("");
  const handleSetRepeatPass = useCallback(
    (e) => setRepeatPass(e.target.value),
    []
  );

  const handleRegister = () => {
    const user = {
      email: email,
      password: password,
      createdAt: new Date().toLocaleString(),
    };
    password === repeatPass && email !== "" && password !== ""
      ? fetch(`http://localhost:5000/users`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          navigate("/login");
        })
      : alert("Check the entered data!");
  };

  return (
    <div className="flex flex-col items-center gap-1 mt-10">
      <div className="text-4xl mt-16 font-medium">Sign up</div>
      <div className="flex flex-col  mt-4 gap-3">
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
        <div className="bg-stone-200  text-2xl rounded-sm">
          <input
            className="bg-stone-200 w-[400px] py-3 px-4  "
            placeholder="repeat password"
            type="password"
            value={repeatPass}
            onChange={handleSetRepeatPass}
          />
        </div>
      </div>
      <button
        className="text-2xl bg-stone-200 py-3 px-16 mt-6"
        onClick={handleRegister}
      >
        Sign up
      </button>
    </div>
  );
}

export default Register;

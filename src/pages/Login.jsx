import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   toast.success(
  "Login Successful"
);
  };

  return (
    <div className="loginPage">

  <form className="loginBox">

    <h1>Sign In</h1>

    <input
      type="email"
      placeholder="Email"
    />

    <input
      type="password"
      placeholder="Password"
    />

    <button>
      Sign In
    </button>

  </form>

</div>
  );
}

export default Login;
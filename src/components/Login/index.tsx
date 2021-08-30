import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function Login() {
  const [isLogged, setIsLogged] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setIsLogged(true)
    console.log(isLogged)
  };

  return (
    <div>
      <div className="login">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <h1>Event Finder App</h1>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email must not be empty",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Must contain @ numbers . and alphabets",
              },
            })}
          />
          <br />
          <div style={{ color: "red" }}>
            <ErrorMessage errors={errors} name="email" />
          </div>

          <br />
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password must not be empty",
              pattern: {
                value: /(?=.*[0-9])/,
                message: "must contain some number",
              },
            })}
          />
          <br />
          <div style={{ color: "red" }}>
            <ErrorMessage errors={errors} name="password" />
          </div>
          <br />
          <input type="submit" name="" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
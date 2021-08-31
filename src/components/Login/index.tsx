import "./style.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

interface LoggedProp{
  setIsLogged:(para: boolean) => void
  isLogged:boolean
}
const Login = ({setIsLogged, isLogged}: LoggedProp) => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState<Array<User>>([])

  useEffect(()=> {
  axios.get("http://localhost:4000/users")
  .then(res => {
    setUsers(res.data)
  })
  .catch(e => {
    console.log(e)
  })
}, [])

  const onSubmit = async (data: User) => {
    const registeredUser = users.find(user => ( data.email == user.email && data.password == user.password))
    if(registeredUser){
      setIsLogged(true)
      localStorage.setItem("user", JSON.stringify(registeredUser))
    }
    
    // await axios.post("http://localhost:4000/users", data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // localStorage.setItem("user", JSON.stringify(isLogged))

    history.push("/")
  };

  return (
    <div>
      <div className="login">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <h1>Todo App</h1>
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

import "./style.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector} from "react-redux";
import { login } from "../../redux/actions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { fetchUsers } from "../../redux/actions/fetchUser";

const LoginRegister = () => {
  const users = useSelector((state: RootStateOrAny) => state.userReducer.users)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=> {
    dispatch(fetchUsers())
  }, [])

  const onSubmit = async (data: User) => {
    if(location.state == "register"){
      /* Register */
      const sameEmail = users.find((user: User) => (data.email == user.email))
      console.log(sameEmail)
      
      if(sameEmail){
        toast.warn("Email already exists, Please chose a unique email")
      } else{
        const newUser = {
          email: data.email,
          password: data.password
        }
        axios.post(`http://localhost:4000/users`, newUser, {
          headers: {
            "Content-type": "application/json"
          }
        })
        dispatch(fetchUsers())
        dispatch(login())
        localStorage.setItem("user", JSON.stringify(newUser))
        history.push("/")
      } 
    }
    else{
      /* Login */
      const registeredUser = users.find((user:User) => ( data.email == user.email && data.password == user.password))
      if(registeredUser){
        dispatch(login())
        localStorage.setItem("user", JSON.stringify(registeredUser))
        history.push("/")
      } 
     else{
       toast.warn("Not a registered user")
     } 
    }
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
          <input type="submit" name="" value= {location.state== "register"? "Register" : "Login"} />
          
          { location.state == "register" ?
          <Link to = {{
            pathname: "/login",
            state: "login"
          }} className= "register-link" >Login</Link>
          :
          <Link to = {{
            pathname: "/register",
            state: "register"
          }} className= "register-link" >Not yet User? Register</Link>
          
        }
        </form>
      </div>
        <ToastContainer position= "top-center" />
    </div>
  );
}

export default LoginRegister;

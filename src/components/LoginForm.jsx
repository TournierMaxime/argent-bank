import React, { useState } from "react"
import useHandleAuth from "../hooks/useHandleAuth"
import Input from "./Input"

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const { handleLogin } = useHandleAuth({ data })

  console.log("data", data)
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <Input
          htmlFor={"email"}
          label={"Email"}
          type={"text"}
          id={"email"}
          value={data.email}
          data={data}
          setData={setData}
        />
        <Input
          htmlFor={"password"}
          label={"Password"}
          type={"password"}
          id={"password"}
          value={data.password}
          data={data}
          setData={setData}
        />
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button onClick={(e) => handleLogin(e)} className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  )
}

export default LoginForm

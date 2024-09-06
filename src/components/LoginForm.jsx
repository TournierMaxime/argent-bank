import React, { useState } from "react"
import useHandleAuth from "../hooks/useHandleAuth"
import Input from "./Input"

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const { handleLogin, message } = useHandleAuth({ data })

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <Input
          divName={"input-wrapper"}
          htmlFor={"email"}
          label={"Email"}
          type={"text"}
          id={"email"}
          value={data.email}
          data={data}
          setData={setData}
        />
        <Input
          divName={"input-wrapper"}
          htmlFor={"password"}
          label={"Password"}
          type={"password"}
          id={"password"}
          value={data.password}
          data={data}
          setData={setData}
        />
        <Input
          divName={"input-remember"}
          htmlFor={"remember"}
          label={"Remember me"}
          type={"checkbox"}
          id={"remember"}
          value={data.remember}
          data={data}
          setData={setData}
        />

        {message?.error ? <i className="error">{message?.error}</i> : null}

        <button onClick={(e) => handleLogin(e)} className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  )
}

export default LoginForm

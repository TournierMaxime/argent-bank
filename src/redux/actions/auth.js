import { Login } from "../../services/users.js"

const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_USER_REQUEST" })
    const response = await Login(data)

    const payload = {
      token: response.data.body.token,
    }
    dispatch({
      type: "LOGIN_USER_SUCCESS",
      payload,
    })

    return response.data
  } catch (error) {
    dispatch({
      type: "LOGIN_USER_FAILURE",
      payload: error.message,
    })
    console.log("loginUser", error.message)
    throw error
  }
}

export { login }

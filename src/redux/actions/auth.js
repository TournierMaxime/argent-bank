import { Login } from "../../services/users.js"

const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_USER_REQUEST" })
    const response = await Login(data)

    const payload = {
      token: response.data.body.token,
      remember: data.remember,
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

const logout = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT_USER_SUCCESS",
  })
}

const remember = () => async (dispatch) => {
  dispatch({
    type: "SET_REMEMBER",
  })
}

export { login, logout, remember }

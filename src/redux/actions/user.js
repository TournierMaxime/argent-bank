import { OneUser, UpdateUser } from "../../services/users.js"

const oneUser = (token) => async (dispatch) => {
  try {
    dispatch({ type: "ONE_USER_REQUEST" })
    const response = await OneUser(token)

    dispatch({
      type: "ONE_USER_SUCCESS",
      payload: response.data.body,
    })

    return response.data
  } catch (error) {
    dispatch({
      type: "ONE_USER_FAILURE",
      payload: error.message,
    })
    console.log("oneUser", error.message)
    throw error
  }
}

const updateUser = (data, token) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USER_REQUEST" })
    const response = await UpdateUser(data, token)

    dispatch({
      type: "UPDATE_USER_SUCCESS",
      payload: response.data,
    })

    return response.data
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_FAILURE",
      payload: error.message,
    })
    console.log("updateUser", error.message)
    throw error
  }
}

export { oneUser, updateUser }

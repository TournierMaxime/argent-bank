const initialState = {
  isAuthenticated: false,
  loading: false,
  data: {
    token: null,
  },
  error: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "LOGIN_USER_SUCCESS":
      localStorage.setItem("userData", JSON.stringify(action.payload))
      return {
        ...state,
        loading: false,
        data: action.payload,
        isAuthenticated: true,
      }
    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      }
    case "LOGOUT_USER_SUCCESS":
      localStorage.removeItem("userData")
      return {
        ...state,
        isAuthenticated: false,
        data: {
          token: null,
        },
      }
    case "LOGOUT_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export { loginReducer }

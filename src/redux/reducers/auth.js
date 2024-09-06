const initialState = {
  isAuthenticated: false,
  loading: false,
  data: {
    token: null,
    remember: false,
    accountData: [{}],
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
      if (action.payload.remember === true) {
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: action.payload.token,
          }),
        )
      } else {
        sessionStorage.setItem(
          "token",
          JSON.stringify({
            token: action.payload.token,
          }),
        )
      }

      return {
        ...state,
        loading: false,
        data: {
          token: action.payload.token,
          remember: action.payload.remember,
          accountData: [
            {
              title: "Argent Bank Checking (x8349)",
              amount: "$2,082.79",
              description: "Available Balance",
            },
            {
              title: "Argent Bank Savings (x6712)",
              amount: "$10,928.42",
              description: "Available Balance",
            },
            {
              title: "Argent Bank Credit Card (x8349)",
              amount: "$184.30",
              description: "Current Balance",
            },
          ],
        },
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
      localStorage.removeItem("token")
      sessionStorage.removeItem("token")
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
    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        data: {
          ...state.data,
        },
      }
    default:
      return state
  }
}

export { loginReducer }

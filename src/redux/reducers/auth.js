const initialState = {
  isAuthenticated: false,
  loading: false,
  data: {
    token: null,
    firstName: "",
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
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: action.payload.token,
          firstName: action.payload.firstName,
        }),
      )
      return {
        ...state,
        loading: false,
        data: {
          token: action.payload.token,
          firstName: action.payload.firstName,
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

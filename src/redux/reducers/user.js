const initialState = {
  loading: false,
  data: {},
  error: null,
}

const oneUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ONE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "ONE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "ONE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case "UPDATE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export { oneUserReducer, updateUserReducer }

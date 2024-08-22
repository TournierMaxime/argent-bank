import { loginReducer } from "./reducers/auth"
import { oneUserReducer, updateUserReducer } from "./reducers/user"

const authReducers = {
  login: loginReducer,
}

const userReducers = {
  oneUser: oneUserReducer,
  updateUser: updateUserReducer,
}
export { authReducers, userReducers }

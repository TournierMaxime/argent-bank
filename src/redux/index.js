import { combineReducers } from "redux"
import { loginReducer } from "./reducers/auth"
import { oneUserReducer, updateUserReducer } from "./reducers/user"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

// Configuration de persistance
const persistConfig = {
  key: "root", // Clé principale de persistance
  storage, // Utiliser localStorage
}
// Applique persistReducer uniquement au loginReducer
const persistedAuthReducer = persistReducer(persistConfig, loginReducer)

// Combine les reducers
const rootReducer = combineReducers({
  login: persistedAuthReducer,
  oneUser: oneUserReducer,
  updateUser: updateUserReducer,
})

export default rootReducer

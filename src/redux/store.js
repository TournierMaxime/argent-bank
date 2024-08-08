import { configureStore } from "@reduxjs/toolkit"
import { thunk as thunkMiddleware } from "redux-thunk"
import { authReducers } from "./index"

const createBaseStore = (reducers) => {
  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(thunkMiddleware),
  })

  return store
}

const rootReducer = { ...authReducers }

const store = createBaseStore(rootReducer)

export default store

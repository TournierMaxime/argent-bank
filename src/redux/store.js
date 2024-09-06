import { configureStore } from "@reduxjs/toolkit"
import { thunk as thunkMiddleware } from "redux-thunk"
import rootReducer from "./index" // Importer le rootReducer combiné
import { persistStore } from "redux-persist"

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(thunkMiddleware),
})

const persistor = persistStore(store)

export { store, persistor }

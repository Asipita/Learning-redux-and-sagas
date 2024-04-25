import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { auth } from "./login";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, auth.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  // middleware: applyMiddleware((middleware)=> [...middleware, thunk]),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
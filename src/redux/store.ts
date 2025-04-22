import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import cartReducer from "./slices/cartSlice";
import notificationReducer from "./slices/notificationSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "notification"],
};

const rootReducer = combineReducers({
  modal: modalReducer,
  cart: cartReducer,
  notification: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

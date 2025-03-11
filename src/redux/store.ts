import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import cartReducer from "./slices/cartSlice";
import notificationReducer from "./slices/notificationSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

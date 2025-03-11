import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  discount: number;
  image: string;
  color: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice += action.payload.price;
      state.totalCount += 1;
    },

    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }

        state.totalPrice -= item.price;
        state.totalCount -= 1;
      }
    },

    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.price;
        state.totalCount += 1;
      }
    },

    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.price;
        state.totalCount -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

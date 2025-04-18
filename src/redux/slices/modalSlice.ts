import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ModalState {
  id: number | null;
  isOpen: boolean;
}

const initialState: ModalState = {
  id: null,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.id = null;
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalOpen = (state: RootState) => state.modal.isOpen;
export const selectModalId = (state: RootState) => state.modal.id;

export default modalSlice.reducer;

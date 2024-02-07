import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: false,
    reducers: {
        abrirModal: () => {
            return true;
        }, 
        fecharModal: () => {
            return false;
        }
    }
});

export default modalSlice.reducer;

export const { abrirModal, fecharModal } = modalSlice.actions;

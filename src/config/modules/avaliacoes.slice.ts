import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Avaliacao } from "../../models/avaliacao.model";

const initialState: Avaliacao[] = [
    {
        id: "1111",
        nota: 10,
        disciplina: "React III",
        idAluno: "1111"
    }
];

const avaliacoesSlice = createSlice({
    name: "avaliacoes",
    initialState,
    reducers: {
        deletarAvaliacao: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.id !== action.payload);
        },
        criarAvaliacao: (state, action: PayloadAction<Avaliacao>) => {
            return [...state, action.payload];
        }
    }
});

export default avaliacoesSlice.reducer;

export const { deletarAvaliacao, criarAvaliacao } = avaliacoesSlice.actions;

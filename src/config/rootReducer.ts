import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./modules/user.slice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import avaliacoesSlice from "./modules/avaliacoes.slice";
import modalSlice from "./modules/modal.slice";

export const rootReducer = combineReducers({
    user: userSlice,
    avaliacoes: avaliacoesSlice,
    modal: modalSlice
});

export const persistedReducer = persistReducer({
    key: "alunos",
    storage: storage
}, rootReducer);

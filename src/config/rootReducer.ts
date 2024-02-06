import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./modules/user.slice";

export const rootReducer = combineReducers({
    user: userSlice
});

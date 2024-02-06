import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/user.model";

const initialState: User | null = null;

const userSlice = createSlice({
    name: "user",
    initialState: initialState as User | null,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            return action.payload;
        }
    }
});

export default userSlice.reducer;

export const { login } = userSlice.actions;

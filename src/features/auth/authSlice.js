import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser } from "./authAsync";

const initialState = {
    currentUser: null,
    isLoading: true,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // bắt đầu gọi API
            .addCase(getCurrentUser.pending, (state) => {
                state.isLoading = true;
            })
            // .then
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            // .catch
            .addCase(getCurrentUser.rejected, (state) => {
                state.isLoading = false;
                state.currentUser = null;
            });
    },
});

export const { setCurrentUser, setUserLoading } = authSlice.actions;

export default authSlice.reducer;

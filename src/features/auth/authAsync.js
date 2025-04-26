import httpRequest from "@/utils/httpRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk(
    "auth/getCurrentUser",
    async (index) => {
        const response = await httpRequest.get(`/auth/me?index=${index}`);
        return response.data;
    }
);

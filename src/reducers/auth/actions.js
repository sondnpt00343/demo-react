import authService from "@/services/authService";
import {
    GET_CURRENT_USER,
    SET_CURRENT_USER,
    SET_USER_LOADING,
} from "./constants";

export const getCurrentUser = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_CURRENT_USER,
        });
        try {
            const res = await authService.getCurrentUser();
            dispatch(setCurrentUser(res.data));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setUserLoading(false));
        }
    };
};

export const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload,
});

export const setUserLoading = (payload) => ({
    type: SET_USER_LOADING,
    payload,
});

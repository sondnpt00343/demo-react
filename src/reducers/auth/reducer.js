import { SET_CURRENT_USER, SET_USER_LOADING } from "./constants";

const initState = {
    currentUser: null,
    isLoading: true,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case SET_USER_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;

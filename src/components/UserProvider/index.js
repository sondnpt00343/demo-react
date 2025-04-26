import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "@/features/auth/authAsync";

function UserProvider() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser(1));
        dispatch(getCurrentUser(2));
        dispatch(getCurrentUser(3));
        dispatch(getCurrentUser(4));
        dispatch(getCurrentUser(5));
    }, [dispatch]);

    return null;
}

export default UserProvider;

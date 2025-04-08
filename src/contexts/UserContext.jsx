import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import authService from "@/services/authService";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await authService.getCurrentUser();
                setUser(data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUser();
    }, []);

    const values = {
        user,
        isLoading,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node,
};

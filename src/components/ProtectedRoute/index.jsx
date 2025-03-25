import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import config from "@/config";
import authService from "@/services/authService";

function ProtectedRoute({ children }) {
    const location = useLocation();

    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        (async () => {
            try {
                const data = await authService.getCurrentUser();
                setCurrentUser(data.user);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        })();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!currentUser) {
        const path = encodeURIComponent(location.pathname);
        return <Navigate to={`${config.routes.login}?continue=${path}`} />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ProtectedRoute;

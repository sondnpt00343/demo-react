import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import config from "@/config";
import { UserContext } from "@/contexts/UserContext";

function ProtectedRoute({ children }) {
    const location = useLocation();
    const userContext = useContext(UserContext);

    if (userContext.isLoading) {
        return <div>Loading...</div>;
    }

    if (!userContext.user) {
        const path = encodeURIComponent(location.pathname);
        return <Navigate to={`${config.routes.login}?continue=${path}`} />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ProtectedRoute;

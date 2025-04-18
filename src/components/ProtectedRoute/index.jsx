import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

import config from "@/config";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
    const location = useLocation();
    const user = useCurrentUser();
    const isLoading = useSelector((state) => state.auth.isLoading);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        const path = encodeURIComponent(location.pathname);
        return <Navigate to={`${config.routes.login}?continue=${path}`} />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ProtectedRoute;

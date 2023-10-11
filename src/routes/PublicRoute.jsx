import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PublicRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo = '/',
    restricted = false,
}) => {  
    const shouldRedirect = isAuthenticated && restricted;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PublicRoute.propTypes = {
    component: PropTypes.element.isRequired,
    restricted: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool,
};

export default PublicRoute;
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivatRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo = '/login',
    restricted = true
}) => {
    const shouldRedirect = !isAuthenticated && restricted;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};


PrivatRoute.propTypes = {
    component: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    redirectTo: PropTypes.string.isRequired,
    restricted: PropTypes.bool.isRequired,
};

export default PrivatRoute;
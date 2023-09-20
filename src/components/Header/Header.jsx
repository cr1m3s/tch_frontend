import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to="/register">Sign up</NavLink>
            <NavLink to="/login">Log in</NavLink>
        </div>
    );
}

export default Header;
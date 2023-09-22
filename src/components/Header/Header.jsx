import { NavLink } from "react-router-dom";




const Header = () => {
    return (
        <div>
            <NavLink to="/register" style={{marginRight: 30}}>Sign up</NavLink>
            <NavLink to="/login" style={{marginRight: 30}}>Log in</NavLink>
            <NavLink to="/conditions">Terms & Conditions</NavLink>
        </div>
    );
}

export default Header;
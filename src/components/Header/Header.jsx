import { NavLink } from "react-router-dom";




const Header = () => {
    return (
        <div>
            <NavLink to="/register" style={{marginRight: 30}}>Sign up</NavLink>
            <NavLink to="/login" style={{marginRight: 30}}>Log in</NavLink>
            <NavLink to="/conditions" style={{ marginRight: 30 }}>Terms & Conditions</NavLink>
            <NavLink to="/policy"style={{marginRight: 30}}>Policy Rules</NavLink>
            <NavLink to="/success">CongratsPage</NavLink>
        </div>
    );
}

export default Header;
import { NavLink } from "react-router-dom";
import { Button } from '../Button/Button';
import { Logo } from "../Logo";


const Header = () => {
    return (
        <div>
            {/* <NavLink to="/register">Sign up</NavLink>
            <NavLink to="/login">Log in</NavLink> */}


            {/* <Logo variant="header" /> */}
            <Logo variant="footer" />
            {/* <Button variant="primary" icon="time" />  */}
        </div>
    );
}

export default Header;
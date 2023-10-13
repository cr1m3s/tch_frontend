import { useState } from "react";
import { Burger, LinkHeader, Logo } from "../../common";
import { StyledNavActions, StyledNavContainer, StyledNavPrimary, StyledNavSecondary, StyledNav, StyledContainer } from "./Navigation.styled";
import { PropTypes } from 'prop-types';
import NAV_LINK from "../../../shared/navLinks";

export const Navigation = ({ className }) => {

    // Show UserActionsButtons?
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin = () => {
        setIsLogin(true);
    };

    // Burger
    const [isOpened, setIsOpen] = useState(false);
    const handleBurgerClick = () => {
        setIsOpen(!isOpened);
    };

    return (
        <StyledContainer className={`${className} header`}>
            <Logo variant="footer" />
            <StyledNavContainer isOpen={isOpened}>
                <StyledNav className="nav-list">
                    {NAV_LINK.map((link, index) => (
                        <li key={index} >
                            <LinkHeader to={link.to}>{link.text}</LinkHeader>
                        </li>
                    ))}
                </StyledNav>
                {!isLogin && (
                    <StyledNavActions className="action-buttons">
                        <StyledNavPrimary to="/login">Log in</StyledNavPrimary>
                        <StyledNavSecondary to="/register">Sing up</StyledNavSecondary>
                    </StyledNavActions>
                )}
            </StyledNavContainer>
            <Burger onClick={handleBurgerClick} isOpen={isOpened} />
        </StyledContainer >
    );
}

Navigation.propTypes = {
    className: PropTypes.string,
};

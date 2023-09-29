import { LinkHeader } from "../../components";
import { StyledNavActions, StyledNavContainer, StyledNavPrimary, StyledNavSecondary, StyledNav } from "./Navigation.styled";
import { PropTypes } from 'prop-types';

export const Navigation = ({ className }) => {
    return (
        <StyledNavContainer className={className}>
            <StyledNav className="nav-list" >
                <LinkHeader to="/login" >Teachers</LinkHeader>
                <LinkHeader to="/advertisements" >My advertisements</LinkHeader>
                <LinkHeader to="/profile" >My profile</LinkHeader>
            </StyledNav>
            <StyledNavActions className="action-buttons">
                <StyledNavPrimary to="/login" >Log in</StyledNavPrimary>
                <StyledNavSecondary to="/register" >Sing up</StyledNavSecondary>
            </StyledNavActions>
        </StyledNavContainer>
    );
}

Navigation.propTypes = {
    className: PropTypes.string,
};


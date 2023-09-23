import { LinkHeader } from "../../components";
import { StyledNavActions, StyledNavContainer, StyledNavPrimary, StyledNavSecondary, StyledNav } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <StyledNavContainer>
            <StyledNav>
                <LinkHeader to="/login" >Teachers</LinkHeader>
                <LinkHeader to="/advertisements" >My advertisements</LinkHeader>
                <LinkHeader to="/profile" >My profile</LinkHeader>
            </StyledNav>
            <StyledNavActions>
                <StyledNavPrimary to="/login" >Log in</StyledNavPrimary>
                <StyledNavSecondary to="/register" >Sing up</StyledNavSecondary>
            </StyledNavActions>
        </StyledNavContainer>
    );
}


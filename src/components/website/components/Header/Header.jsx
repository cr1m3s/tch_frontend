import { Logo, Navigation } from "../../../../components";
import { StyledContainer, StyledFixed } from "./Header.styled";

export const Header = () => {
    return (
        <StyledContainer >
            <StyledFixed>
                <Logo variant="header" />
                <Navigation />
            </StyledFixed>
        </StyledContainer>
    );
}


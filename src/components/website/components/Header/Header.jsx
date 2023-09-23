import { useEffect, useRef } from "react";
import { Logo, Navigation } from "../../../../components";
import { StyledContainer, StyledFixed } from "./Header.styled";



export const Header = () => {

    // const headerRef = useRef(null);
    // useEffect(() => {
    //     const scrollHeader = () => {
    //         if (
    //             document.body.scrollTop > 100 ||
    //             document.documentElement.scrollTop > 100
    //         ) {
    //             headerRef.current.classList.add("scroll");
    //         } else {
    //             headerRef.current.classList.remove("scroll");
    //         }
    //     };
    //     window.addEventListener("scroll", scrollHeader);
    //     return () => {
    //         window.removeEventListener("scroll", scrollHeader);
    //     };
    // }, []);

    return (
        <StyledContainer >
            <StyledFixed>
                <Logo variant="header" />
                <Navigation />
            </StyledFixed>
        </StyledContainer>
    );
}


import { useEffect, useRef, useState } from "react";
import { Logo } from "../../../../components";
import { StyledContainer, StyledFixed, StyledNavigation } from "./Header.styled";
import { Burger } from "../../../Burger/Burger";



export const Header = () => {

    const headerRef = useRef(null);
    useEffect(() => {
        const scrollHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add("scroll");
            } else {
                headerRef.current.classList.remove("scroll");
            }
        };
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.removeEventListener("scroll", scrollHeader);
        };
    }, []);

    // Burger
    const [isOpen, setIsOpen] = useState(false);
    const handleBurgerClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <StyledContainer >
                <StyledFixed ref={headerRef}>
                    <Logo variant="header" />
                    {/* {isOpen ? (
                        <Logo variant="footer" />
                    ) : (
                        <Logo variant="header" />
                    )} */}
                    <StyledNavigation className="navigation" isOpen={isOpen} />
                </StyledFixed>
            </StyledContainer>
            <Burger onClick={handleBurgerClick} isOpen={isOpen} />
        </>

    );
}


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
    const [isOpened, setIsOpen] = useState(false);
    const handleBurgerClick = () => {
        setIsOpen(!isOpened);
    };

    return (
        <>
            <StyledContainer >
                <StyledFixed ref={headerRef}>
                    {isOpened ? (
                        <Logo variant="footer" />
                    ) : (
                        <Logo variant="header" />
                    )}
                    <StyledNavigation className="navigation" isOpen={isOpened} />
                </StyledFixed>
            </StyledContainer>
            <Burger onClick={handleBurgerClick} isOpen={isOpened} />
        </>

    );
}


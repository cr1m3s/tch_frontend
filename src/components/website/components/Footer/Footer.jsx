// import { useEffect, useRef, useState } from "react";
import { NAV_LINK } from "../../../../shared";
import { Icon, Logo } from "../../../common";
import { StyledContainer, StyledFixed, StyledFooterTop, StyledNav, StyledPolicy, StyledFooterLink, StyledFooterBottom } from "./Footer.styled";



export const Footer = () => {

    return (
        <StyledContainer>
            <StyledFixed className="footer">
                <StyledFooterTop className="footer-top">
                    <Logo variant="footer" />
                    <StyledNav>
                        {NAV_LINK.map((link, index) => (
                            <li key={index} >
                                <StyledFooterLink to={link.to}>{link.text}</StyledFooterLink>
                            </li>
                        ))}
                    </StyledNav>
                    <StyledPolicy>
                        <li>
                            <StyledFooterLink to="/policy" target="_blank">Privacy Policy</StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink to="/conditions" target="_blank">Terms of Use</StyledFooterLink>
                        </li>
                    </StyledPolicy>
                </StyledFooterTop>
                <StyledFooterBottom className="footer-bottom">
                    <p> {new Date().getFullYear()} &copy; Skill Stream | All rights reserved</p>
                    <p>Proudly made in Ukraine <span>
                        <Icon name="flag-ua" size={24} />
                    </span> </p>
                </StyledFooterBottom>
            </StyledFixed>
        </StyledContainer >

    );
}


// import { useEffect, useRef, useState } from "react";
import { Icon, Logo } from "../../../common";
import { StyledContainer, StyledFixed, StyledFooterTop, StyledNav, StyledPolicy, StyledFooterLink, StyledFooterBottom } from "./Footer.styled";



export const Footer = () => {

    return (
        <StyledContainer>
            <StyledFixed className="footer">
                <StyledFooterTop className="footer-top">
                    {/* <Logo variant="footer" /> */}
                    <StyledNav>
                        <li>
                            <StyledFooterLink to="/">Teachers</StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink to="/">My advertisements</StyledFooterLink>
                        </li>
                        <li>
                            <StyledFooterLink to="/">My profile</StyledFooterLink>
                        </li>
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
                    <p>© Skill Stream | All rights reserved</p>
                    <p>Proudly made in Ukraine <span>
                        <Icon name="flag-ua" size={24} />
                    </span> </p>
                </StyledFooterBottom>
            </StyledFixed>
        </StyledContainer >

    );
}


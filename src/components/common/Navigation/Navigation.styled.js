import styled, { css } from "styled-components";
import { ButtonLink } from "../../../components/common";

export const StyledContainer = styled.header`
  position: fixed;
  max-width: 1440px;
  display: flex;
  height: 120px;
  align-items: center;
  margin: 0 auto;
  padding: 0px 16px;
  background-color: ${(props) => props.theme.colors.white};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  box-shadow: 0px 2px 0px -1px rgba(199, 199, 199, 1);
  & > *:first-child {
    z-index: 100;
  }
  @media screen and (min-width: ${(props) => props.theme.sizes.laptopLarge}) {
    ${(isOpen) =>
      isOpen &&
      css`
        position: relative;
      `}
  }
`;

export const StyledNavContainer = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 364px;
  @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
    grid-template-columns: 1fr 464px;
    /* ${(isLogin) =>
      isLogin &&
      css`
        grid-template-columns: auto;
        justify-content: flex-end;
      `} */
  }
  @media (max-width: 1230px) {
    min-height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-200vw)"};
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    width: 100%;
    padding-bottom: 50px;
    background: ${(props) => props.theme.colors.blue};
  }
`;

export const StyledNav = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: 100;
  @media (max-width: 1230px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    margin-top: 120px;
    padding-top: 50px;
    border-top: 1px solid #aeacac;
  }
`;

export const StyledNavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
  font-family: Nunito Sans;
  padding-bottom: 50px;
  @media screen and (min-width: ${(props) => props.theme.sizes.laptopLarge}) {
    min-width: 100%;
    justify-content: flex-end;
    padding-bottom: 0px;
  }
`;

export const StyledNavPrimary = styled(ButtonLink)`
  background: ${(props) => props.theme.colors.golden};
  color: ${(props) => props.theme.colors.lightBlue};
  &:hover {
    background: ${(props) => props.theme.colors.blue};
    text-decoration-line: none;
  }
  &:active {
    background: ${(props) => props.theme.colors.darkBlue};
  }
  @media screen and (min-width: ${(props) => props.theme.sizes.laptopLarge}) {
    background: ${(props) => props.theme.colors.lightBlue};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const StyledNavSecondary = styled(ButtonLink)`
  background: inherit;
  border-color: ${(props) => props.theme.colors.golden};
  border: 1px solid ${(props) => props.theme.colors.golden};
  color: ${(props) => props.theme.colors.golden};
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.darkBlue};
    border-color: ${(props) => props.theme.colors.darkBlue};
  }
  @media screen and (min-width: ${(props) => props.theme.sizes.laptopLarge}) {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.lightBlue};
    border: 1px solid ${(props) => props.theme.colors.lightBlue};
  }
`;

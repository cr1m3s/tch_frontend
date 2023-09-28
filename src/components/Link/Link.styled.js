import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 3.6px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryText};
  &:hover {
    text-decoration-line: underline;
  }
  &.active {
    text-decoration: underline;
    font-weight: 700;
  }
  @media (max-width: 1230px) {
    color: ${(props) => props.theme.colors.white};
  }
  /* @media (max-width: 768px) {
    font-size: ${({ isOpen }) => (isOpen ? "32px" : "12px")};
  }
  @media (any-hover: hover) {
    &:hover {
      color: ${(props) => props.theme.colors.P5};
    }
  } */
`;
export const StyledButtonLink = styled(NavLink)`
  font-family: Montserrat;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  min-width: 150px;
  height: 56px;
  padding: 0 12px;
  border-radius: 10px;
  border: none;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0px;
  text-transform: uppercase;
  &:hover {
    text-decoration-line: none;
  }
  @media (min-width: 1440px) {
    min-width: 200px;
  }
  /* @media (max-width: 768px) {
    font-size: ${({ isOpen }) => (isOpen ? "32px" : "12px")};
  }
  @media (any-hover: hover) {
    &:hover {
      color: ${(props) => props.theme.colors.P5};
    }
  } */
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.footer`
  min-width: 100%;
  background-color: ${(props) => props.theme.colors.lightBlue};
  position: absolute;
  /* bottom: 0; */
  right: 0;
  left: 0;
`;

export const StyledFixed = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 50px 16px 16px 50px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 0px -1px rgba(199, 199, 199, 1);
  position: relative;
  transition: height 0.2s ease, background-color 0.2s ease, padding 0.2s ease;
`;

export const StyledFooterTop = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const StyledNav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFooterBottom = styled.div`
  min-width: 100%;
  display: flex;
  gap: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${(props) => props.theme.colors.lightGrey};
  }
  p:nth-child(2) span {
    width: 24px;
    height: 24px;
  }
  p:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
`;

export const StyledPolicy = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFooterLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.lightGrey};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  transition: all 0.2s ease 0s;
  &:hover {
    color: ${(props) => props.theme.colors.borderBtn};
  }
`;

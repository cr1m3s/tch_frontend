import styled from "styled-components";
import { Navigation } from "../../../common";

export const StyledContainer = styled.header`
  position: sticky;
  min-width: 100%;
  padding: 0px 0px;
  background-color: ${(props) => props.theme.colors.white};
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;

export const StyledFixed = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 0px -1px rgba(199, 199, 199, 1);
  position: relative;
  height: 120px;
  transition: height 0.2s ease, background-color 0.2s ease, padding 0.2s ease;
  &.scroll {
    height: 90px;
    border-bottom: none;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 0 0 6px 6px;
    box-shadow: -1px 8px 44px -16px rgba(199, 199, 199, 1);
  }
  @media (max-width: 1230px) {
    border-bottom: 1px solid #aeacac;
  }
`;

export const StyledNavigation = styled(Navigation)`
  @media (max-width: 1230px) {
    min-height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100vw)"};
    position: absolute;
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

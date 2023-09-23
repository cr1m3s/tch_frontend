import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  min-width: 100%;
  padding: 0px 0px;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: 120px;
  transition: height 0.2s ease, background-color 0.2s ease, padding 0.2s ease;
  &.scroll {
    padding: 0px 0px;
    height: 100px;
    background-color: ${(props) => props.theme.colors.block};
    border-radius: 0 0 6px 6px;
  }
  /* @media (max-width: 768px) {
    height: 72px;
    z-index: 2;
  } */
`;
export const StyledFixed = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding-right: 16px;
  padding-left: 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #aeacac;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100vw)"};
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    width: 100%;
    /* padding-top: ${({ isLogin }) => (isLogin ? "80px" : "60px")}; */
    /* padding-bottom: 30px; */
    /* background: ${(props) => props.theme.colors.white}; */
  }
`;

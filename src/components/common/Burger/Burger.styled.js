import styled, { css } from "styled-components";

export const StyledBurger = styled.div`
  cursor: pointer;
  width: 3.225rem;
  height: 2.125rem;
  border-radius: 8px;
  padding: 5px 10px;
  /* border: 1px solid ${(props) => props.theme.colors.secondBlack}; */
  position: fixed;
  top: 44px;
  right: 16px;
  display: none;
  transition: all 0.3s ease 0s;
  z-index: 101;
  @media (max-width: 1230px) {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    span {
      display: block;
      transition: all 0.3s ease 0s;
      width: 2rem;
      height: 0.2rem;
      ${(props) => css`
        background-color: ${({ isOpen }) =>
          isOpen ? props.theme.colors.white : props.theme.colors.secondBlack};
        &:nth-child(1) {
          transform: ${({ isOpen }) =>
            isOpen ? "rotate(45deg) translate(10px,5px)" : "rotate(0)"};
        }
        &:nth-child(2) {
          transform: ${({ isOpen }) =>
            isOpen ? "translateX(100%)" : "translateX(0)"};
          opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
        }
        &:nth-child(3) {
          transform: ${({ isOpen }) =>
            isOpen ? "rotate(-45deg) translate(9px,-4px)" : "rotate(0)"};
        }
      `}
    }
  }
`;

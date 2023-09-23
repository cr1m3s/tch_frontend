import styled from "styled-components";
import { ButtonLink } from "../Link";

export const StyledNavContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 310px;
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 410px;
  }
`;
export const StyledNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: 120px;
  transition: height 0.2s ease, background-color 0.2s ease, padding 0.2s ease;
`;

export const StyledNavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-self: end;
  font-family: Nunito Sans;
`;

export const StyledNavPrimary = styled(ButtonLink)`
  background: ${(props) => props.theme.colors.lightBlue};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    background: ${(props) => props.theme.colors.blue};
    text-decoration-line: none;
  }
  &:active {
    background: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const StyledNavSecondary = styled(ButtonLink)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.lightBlue};
  border: 1px solid ${(props) => props.theme.colors.lightBlue};
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.darkBlue};
    border-color: ${(props) => props.theme.colors.darkBlue};
  }
  @media (min-width: 1440px) {
    min-width: 200px;
  }
`;

// export const JobsArtists = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 40px;
//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 24px;
//     padding-top: 24px;
//     width: 100%;
//     border-top: 1px solid ${(props) => props.theme.colors.N3};
//     a {
//       font-size: 20px;
//       width: 100%;
//     }
//     a:not(:last-child) {
//       margin-bottom: 32px;
//     }
//   }
// `;

// export const StyledUserDropDawn = styled(UserDropDawn)``;
// export const WrapperUserActionBlock = styled.div`
//   position: absolute;
//   right: 16px;
//   @media (max-width: 768px) {
//     position: fixed;
//     width: 100%;
//     height: 72px;
//     top: 0;
//     right: 0;
//     left: 0;
//     &::before {
//       content: "";
//       display: block;
//       height: 100%;
//       width: 100%;
//       position: absolute;
//       z-index: 100;
//       background-color: ${(props) => props.theme.colors.Purple1};
//     }
//   }
// `;

// export const UserInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 8px;
// `;

// export const UserName = styled.p`
//   font-weight: 400;
//   font-size: 16px;
//   ${(props) => css`
//     color: ${props.theme.colors.N10};
//   `}
// `;

// export const UserMail = styled.p`
//   font-weight: 400;
//   font-size: 11px;
//   ${(props) => css`
//     color: ${props.theme.colors.N8};
//   `}
// `;

// export const Arrow = styled(Icon)`
//   cursor: pointer;
//   width: 18px;
//   height: 18px;
//   transition: all 0.3s ease 0s;
// `;

// export const Avatar = styled.img`
//   width: 48px;
//   height: 48px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const UserActionBlock = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   cursor: pointer;
//   ${(props) =>
//     props.isDropDawnOpen &&
//     css`
//       ${Avatar} {
//         border-radius: 50%;
//         box-shadow: 0 0 0 2px ${props.theme.colors.P5};
//       }
//       ${Arrow} {
//         transform: rotate(180deg);
//       }
//     `}
//   @media (max-width: 768px) {
//     order: -1;
//     position: fixed;
//     top: 12px;
//     left: 15px;
//     z-index: 102;
//   }
// `;

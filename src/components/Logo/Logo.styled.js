import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoHeader = styled(Link)`
  display: block;
  cursor: pointer;
  width: 221px;
  height: 120px;
  svg {
    width: 221px;
    height: 120px;
  }
`;

export const LogoFooter = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 224px;
  height: 70px;
  z-index: 101;
  svg {
    width: 224px;
    height: 70px;
  }
`;

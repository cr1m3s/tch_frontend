import { css } from "styled-components";

export const flex = (jc = "flex-start", ai = "stretch") => css`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
`;

export const inlineFlex = (jc = "flex-start", ai = "stretch") => css`
  display: inline-flex;
  justify-content: ${jc};
  align-items: ${ai};
`;

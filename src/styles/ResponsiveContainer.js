import styled from "styled-components";

// const breakpoints = [440, 768, 1440, 1920];
// const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const ResponsiveContainer = styled.main`
  // mobile
    @media screen and (min-width: 320px) {
        margin: 0 auto;
        padding: 0 20px;
    }

    // tablet
    @media screen and (min-width: 768px) {
        max-width: 768px;
        padding: 0 32px;
    }

    // desktop1
    @media screen and (min-width: 1440px) {
        max-width: 1440px;
        padding: 0 16px;
    }

    // desktop2
    @media screen and (min-width: 1920px) {
        max-width: 1920px;
        padding: 0 16px;
    }    
`;

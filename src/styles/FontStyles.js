import { createGlobalStyle } from "styled-components";


import Machina from "./fonts/NeueMachina-Bold.woff";
import Machina2 from "./fonts/NeueMachina-Black.woff2";


export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Neue Machina';
        src: 
            local('Neue Machina'), 
            url(${Machina}) format('woff'),
            url(${Machina2}), format('woff2');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }
`;

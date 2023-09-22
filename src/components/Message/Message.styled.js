import styled from 'styled-components';


export const StyledMessage = styled.p`
    font-family: 'Nunito Sans';
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    color: ${props => props.theme.colors.primaryText};  
    margin-top: ${props => `${props.$indentTop}px`};
    margin-bottom: ${props => `${props.$indentBottom}px`};
`; 
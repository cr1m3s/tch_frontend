import styled from 'styled-components';


export const StyledAccentText = styled.p`
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 24px; 
    line-height: 120%;
    color: ${props => props.theme.colors.primaryText}; 
    margin-bottom: ${props => `${props.$indent}px`};
`;
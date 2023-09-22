import styled from 'styled-components';

export const StyledText = styled.p`
    font-family: 'Nunito Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${props => props.theme.colors.primaryText};  
`; 
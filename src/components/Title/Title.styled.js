import styled from 'styled-components';

export const StyledTitle = styled.h1`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 32 px;
    line-height: 120%;
    margin-bottom: ${props => `${props.$indent}px`};
    color: ${props => props.theme.colors.primaryText};

    @media screen and (min-width: 768px) {
        font-size: 48px;
    }
`;
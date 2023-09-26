import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    color: ${props => props.theme.colors.primaryText};

    @media screen and (min-width: 768px) {
        font-size: 48px;
    }
`;
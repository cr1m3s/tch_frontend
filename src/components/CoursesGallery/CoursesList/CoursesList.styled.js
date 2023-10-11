import styled from 'styled-components';

export const List = styled.ul`
    background-color: ${props => props.theme.colors.card};
    border-top: 1px solid ${props => props.theme.colors.primaryText};
    border-left: 1px solid ${props => props.theme.colors.primaryText};
    border-right: 1px solid ${props => props.theme.colors.primaryText};
    border-radius: 8px 8px 0px 0px;
    padding-top: 15px;
    width: 408px;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        width: 736px;
    }

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        width: 860px;
    }    
`;
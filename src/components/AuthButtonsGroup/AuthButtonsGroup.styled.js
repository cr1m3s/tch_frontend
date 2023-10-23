import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const AuthBtnsWrapper = styled.div`
    display: none;

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        display: inline;
    }
`;

export const LoginLink = styled(Link)`
    background-color: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.white};
    padding: 12px 45px 12px 45px;
    border-radius: 10px;
    width: 300px;
    margin-right: 10px;

    &:hover,
    &.focus {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.lightBlue};
        border: 1px solid ${props => props.theme.colors.lightBlue};
    }

    @media screen and (min-width: ${props => props.theme.sizes.large}) {
        padding: 12px 70px 12px 70px;
    }
`;

export const RegisterLink = styled(Link)`
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.lightBlue};
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.lightBlue};
    padding: 12px 45px 12px 45px;

    &:hover,
    &.focus {
        background-color: ${props => props.theme.colors.lightBlue};
        color: ${props => props.theme.colors.white};        
    }

    @media screen and (min-width: ${props => props.theme.sizes.large}) {
        padding: 12px 65px 12px 65px;
    }    
`;
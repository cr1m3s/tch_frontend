import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage, Form } from 'formik';


export const Section = styled.div`
    padding-top: 144px;
    padding-bottom: 169px;

    @media screen and (min-width: 768px) {
        padding-top: 232px;
        padding-bottom: 232px; 
    };    

    @media screen and (min-width: 1440px) {
        padding-top: 170px;
        padding-bottom: 170px; 
    };     
`;

export const LoginFormContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginLinkBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4px;
    margin-top: 34px;
    margin-bottom: 24px;
    color: ${props => props.theme.colors.primaryText};
    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 20px;
    line-height: 120%    
`;

export const LoginLink = styled(Link)`
    color: ${props => props.theme.colors.link};
    text-decoration: underline;
`;

export const FormBox = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const InputsGroup = styled.div`
    margin-bottom: 50px;
`;


export const InputBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 358px;

    &:first-child {
        margin-bottom: 24px;
    }
`;

export const Input = styled(Field)`
    height: 48px;
    border: 1px solid ${props => props.theme.colors.disabled};
    border-radius: 6px; 
    padding-left: 16px;
    font-size: 18px;
    width: 408px;
`;

export const Error = styled(ErrorMessage)`
    color: ${props => props.theme.colors.error};
`;

export const InputIconShow = styled.span`
    position: absolute;
    top: 44px;
    right: 12px;
`;

export const ForgotPassword = styled.p`
    color: ${props => props.theme.colors.link};
    font-weight: 400;
    font-size: 14px;
    line-height: 72%;

    margin-top: 4px;
    margin-bottom: 24px;
`;
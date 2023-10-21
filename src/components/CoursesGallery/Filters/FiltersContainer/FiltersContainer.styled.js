import styled from 'styled-components';

export const Section = styled.div`
    background-color: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.white};
    height: 100%;
    padding-top: 100px;
    padding-bottom: 40px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        background-color: ${props => props.theme.colors.white};
        color: ${props => props.theme.colors.primaryText};
        padding-top: 0px;
        padding-bottom: 0px;        
    }
`;
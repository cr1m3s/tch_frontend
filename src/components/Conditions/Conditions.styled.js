import styled from 'styled-components';

export const Section = styled.div`
    padding-top: 100px;
    padding-bottom: 150px; 

    @media screen and (min-width: 1400px) {
        padding-bottom: 200px; 
    }; 
`;

export const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    background-color: ${props => props.theme.colors.block};
    border-radius: 8px;
    width: 408px;
    padding: 40px 20px 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 768px) {
        width: 736px;
    }

    @media screen and (min-width: 1400px) {
        width: 940px;
        margin-left: 100px;
    }    

    @media screen and (min-width: 1920px) {
        margin-left: 300px;
    }
`;

export const Item = styled.li`
    list-style: inside;
    font-family: 'Nunito Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: ${props => props.theme.colors.primaryText};    
`;
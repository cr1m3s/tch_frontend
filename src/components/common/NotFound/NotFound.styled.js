import styled from 'styled-components';

export const Section = styled.div`
    padding-top: 154px;
    padding-bottom: 107px;

    @media screen and (min-width: ${(props) => props.theme.sizes.tablet}) {
        padding-top: 130px;
        padding-bottom: 201px; 
    }

    @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
        padding-top: 100px;
        padding-bottom: 184px; 
    } 
    
    @media screen and (min-width: ${(props) => props.theme.sizes.large}) {
        padding-bottom: 200px; 
    }    
`;

export const NotFoundWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 403px;
    font-family: 'Neue Machina';
    font-weight: bold;
    text-align: center;
    
    @media screen and (min-width: ${(props) => props.theme.sizes.tablet}) {
        width: 585px;
    }

    @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
        width: 636px;
    }

    @media screen and (min-width: ${(props) => props.theme.sizes.large}) {
        width: 733px;
    }
`;

export const ErrorTitle = styled.span`
    font-size: 150px;
    line-height: 108px;
    background: linear-gradient(98.71deg, #0D5D74 12.3%, #061F3E 85.35%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    
    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        font-size: 250px;
        line-height: 180px;
    }

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        font-size: 300px;
        line-height: 216px;
    }

    @media screen and (min-width: ${props => props.theme.sizes.large }) {
        font-size: 350px;
        line-height: 252px;
    }    
`;

export const Subtitle = styled.p`
    font-size: 32px;
    line-height: 23px;
    color: ${props => props.theme.colors.primaryText};
    margin-top: 34px;
    margin-bottom: 39px;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        margin-top: 10px;
        font-size: 40px;
        line-height: 29px;
    }   
    
    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        margin-top: 14px;
        margin-bottom: 40px;
    }  
    
    @media screen and (min-width: ${props => props.theme.sizes.large}) {
        margin-top: 0px;
        margin-bottom: 28px;
        font-size: 48px;
        line-height: 35px;
    }     
`;

export const SorryText = styled.p`
    font-size: 16px;
    line-height: 23px;
    color: ${props => props.theme.colors.gray};
    margin-bottom: 16px;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        font-size: 20px;
        line-height: 14px;
    }

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        margin-bottom: 20px;
    }
    
    @media screen and (min-width: ${props => props.theme.sizes.large}) {
        margin-bottom: 28px;
        font-size: 24px;
        line-height: 17px;
    }    
`;

export const GoBackText = styled.p`
    font-size: 16px;
    line-height: 12px;
    color: ${props => props.theme.colors.gray};
    margin-bottom: 40px;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        margin-bottom: 48px;
        font-size: 20px;
        line-height: 14px;
    }

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        margin-bottom: 44px;
    }

    @media screen and (min-width: ${props => props.theme.sizes.large}) {
        margin-bottom: 52px;
        font-size: 24px;
        line-height: 17px;
    }   
`;

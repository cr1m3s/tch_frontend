import styled from 'styled-components';

export const Card = styled.li`
    background-color: ${props => props.theme.colors.card};
    padding: 25px 16px 45px 16px;
    border-bottom: 1px solid ${props => props.theme.colors.primaryText};

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        padding-left: 18,5px;
        padding-right: 18,5px; 
    }

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        padding-left: 20px;
        padding-right: 20px; 
    }
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
`;

export const CardTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`; 

export const TitleBox = styled.div`
    width: 200px;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        width: auto;
    }    
`; 

export const TimeInfo = styled.div`
    display: flex;
    flex-direction: ${props => {
        if (props.$isRow) {
            return 'row';
        }

        return 'column';
    }};
    gap: ${props => {
        if (props.$isRow) {
            return '30px';
        }

        return '10px';
    }};
    margin-top: ${props => {
        if (props.$isRow) {
            return '0px';
        }

        return '10px';
    }};
`;

export const Avatar = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 8px;
    object-fit: cover;
`;

export const AboutTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
`;

export const CourseDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    column-gap: 30px;
    margin-bottom: 20px;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        flex-direction: row;
    }    
`;

export const CourseDescr = styled.p`
    background-color: ${props => props.theme.colors.white};
    padding: 10px 20px 10px 20px;
    border-radius: 8px;
    border: 1px solid #00000040;  
`;



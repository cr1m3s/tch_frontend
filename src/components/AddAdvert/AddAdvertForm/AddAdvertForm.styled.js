import styled from 'styled-components';


export const Section = styled.div`
    padding-top: 24px;
    padding-bottom: 24px; 

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        padding-top: 44px;
        padding-bottom: 44px; 
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        padding-top: 60px;
        padding-bottom: 60px; 
    };
`;
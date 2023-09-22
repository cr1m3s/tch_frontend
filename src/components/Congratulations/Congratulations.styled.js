
import styled from 'styled-components';


export const Section = styled.div`
    padding-top: 100px;
    padding-bottom: 150px;   
    
    @media screen and (min-width: 1440px) { 
        padding-bottom: 200px; 
    }; 
`;

export const SuccessWrapper = styled.div`
    width: 358px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        max-width: 419px;
    }
`;
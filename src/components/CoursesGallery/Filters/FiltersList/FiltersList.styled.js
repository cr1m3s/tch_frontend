import styled from 'styled-components';


export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;

    
    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
        column-gap: 100px;
        padding-left: 20px;
    }

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        flex-direction: column;
        gap: 30px;
        width: 253px;
        padding-left: 0px;
    }    
`;
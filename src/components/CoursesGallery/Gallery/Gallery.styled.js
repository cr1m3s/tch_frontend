import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 100px;

    @media screen and (min-width: ${props => props.theme.sizes.desk}) {
        flex-direction: row;
        justify-content: space-between;
        padding-top: 100px;
    }
`;

export const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`;
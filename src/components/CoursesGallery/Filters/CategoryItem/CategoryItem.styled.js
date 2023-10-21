import styled from 'styled-components';

export const CategoryItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    &:not(:last-child) {
        margin-bottom: 15px;
    }
`;
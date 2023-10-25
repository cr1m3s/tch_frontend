import styled from 'styled-components';


export const Section = styled.div`
    padding-top: 8px;
    padding-bottom: 112px;
`;

export const ContainerWrapper = styled.div`

    display: flex;
    flex-direction: column;
`;

export const LogoutBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.lightBlue};
    fill: ${({ theme }) => theme.colors.lightBlue};

    &:hover,
    &:focus,
    &:active {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.darkBlue};
        fill: ${({ theme }) => theme.colors.darkBlue};
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.disabled};
    }
`;
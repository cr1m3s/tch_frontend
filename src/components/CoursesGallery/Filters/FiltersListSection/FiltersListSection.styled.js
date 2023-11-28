import styled from 'styled-components';
import { Icon } from '../../../common';


export const ItemWrapper = styled.div`
    border-bottom: 1px solid #FFFFFF40;
    width: 253px;
    margin-bottom: 0;

    @media screen and (min-width: ${({theme: {sizes}}) => sizes.desk}) {
        border-bottom: 1px solid #00000040;
    }
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
`;

export const StyledIcon = styled(Icon)`
    fill: ${({ theme: { colors } }) => colors.white};
    width: 24px;
    height: 24px;
    
    @media screen and (min-width: ${({theme: {sizes}}) => sizes.desk}) {
        fill: ${({ theme: { colors } }) => colors.primaryText};
    }
`;

export const CategoriesList = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
`;

export const PriceInputsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const PriceInput = styled.input`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    border: 1px solid ${({ theme: { colors } }) => colors.primaryText};
    border-radius: 6px;
    width: 90px;
    height: 36px;
    background-color: ${({ theme: { colors } }) => colors.disabled};
    padding-left: 16px;
`;

export const Line = styled.div`
    width: 10px;
    height: 1px;
    background-color: ${({ theme: { colors } }) => colors.disabled};
`;
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
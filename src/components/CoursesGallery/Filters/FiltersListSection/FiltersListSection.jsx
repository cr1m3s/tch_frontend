import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { CategoryItem } from '../CategoryItem';
import PropTypes from 'prop-types';

import {
    ItemWrapper,
    SectionHeader,
    Title,
    StyledIcon,
    CategoriesList
} from './FiltersListSection.styled';


const FiltersListSection = ({ title, categories }) => {
    const [isOpen, setIsOpen] = useState(false);
    const id = nanoid();

    const handleToggleItemContainer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ItemWrapper>
            <SectionHeader onClick={handleToggleItemContainer}>
                <Title>{title}</Title>
                <div>
                    <StyledIcon name={isOpen ? 'minus' : 'plus'} />                 
                </div>
            </SectionHeader>

            {
                isOpen &&
                    <CategoriesList>
                        {
                            categories
                                ? categories.map((category) => (
                                    <CategoryItem
                                        key={id}
                                        category={category}
                                    />                             
                                ))
                                : <div>sort prise</div>    
                        }
                    </CategoriesList>
            }
        </ItemWrapper>
    );
};


FiltersListSection.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.array
};


export default FiltersListSection;
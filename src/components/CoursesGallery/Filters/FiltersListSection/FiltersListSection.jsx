import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Icon } from '../../../common';
import { CategoryItem } from '../CategoryItem';
import PropTypes from 'prop-types';

import {
    ItemWrapper,
    SectionHeader,
    Title,
    CategoriesList
} from './FiltersListSection.styled';


const FiltersListSection = ({ title, minPrice, maxPrice, categories }) => {
    const isDescktopScreenSize = window.matchMedia('(min-width: 1440px)').matches;
    const [isOpen, setIsOpen] = useState(false);
    const id = nanoid();

    const handleToggleItemContainer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ItemWrapper>
            <SectionHeader>
                <Title>{title}</Title>
                <div onClick={handleToggleItemContainer}>
                    {
                        (!isOpen && !isDescktopScreenSize) &&(
                                <Icon
                                    name='plus'
                                    size={24}
                                    color='#FFFFFF'
                                />                                            
                            )
                    }
                    {
                        (isOpen && !isDescktopScreenSize) &&(
                                <Icon
                                    name='minus'
                                    size={24}
                                    color='#FFFFFF'
                                />                                            
                            )
                    }
                    {
                        (!isOpen && isDescktopScreenSize) &&(
                                <Icon
                                    name='plus'
                                    size={24}
                                    color='#000000'
                                />                                            
                            )
                    }
                    {
                        (isOpen && isDescktopScreenSize) &&(
                                <Icon
                                    name='minus'
                                    size={24}
                                    color='#000000'
                                />                                            
                            )
                    }                    
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
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired
};

export default FiltersListSection;
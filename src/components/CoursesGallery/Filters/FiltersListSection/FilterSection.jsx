import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Item } from './FilterSection.styled';
import { Icon } from '../../../common';
import PropTypes from 'prop-types';
import CategoryCheckbox from '../CategoryCheckbox/CategoryCheckbox';

const FilterSection = ({ title, categories }) => {
    const isDescktopScreenSize = window.matchMedia('(min-width: 1440px)').matches;
    const [isOpen, setIsOpen] = useState(false);
    const id = nanoid();

    const handleToggleItemContainer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Item style={{ marginBottom: '20px' }}>
            <div>
                <span>{title}</span>
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
            </div>

            {
                isOpen &&
                    <div>
                        {
                            categories
                                ? categories.map((category) => (
                                    <CategoryCheckbox
                                        key={id}
                                        category={category}
                                    />                             
                                ))
                                : <div>sort prise</div>    
                        }
                    </div>
            }
        </Item>
    );
};

FilterSection.propTypes = {
    title: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
};

export default FilterSection;
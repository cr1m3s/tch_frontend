import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '../../../common';
import { CategoryItemWrapper } from './CategoryItem.styled';


const CategoryItem = ({ category }) => {
    const isDescktopScreenSize = window.matchMedia('(min-width: 1440px)').matches;
    const [isChecked, setIsChecked] = useState(false);


    const handleToggleCheckCategory = () => {
        setIsChecked(!isChecked);
    };    

    
    return (
        <CategoryItemWrapper>
            <div onClick={handleToggleCheckCategory}>
                    {
                        (!isChecked && !isDescktopScreenSize) && (
                                <Icon
                                    name='unchecked'
                                    size={24}
                                    color='#FFFFFF'
                                />                                            
                            )
                    }
                    {
                        (isChecked && !isDescktopScreenSize) && (
                                <Icon
                                    name='checked'
                                    size={24}
                                    color='#fff'
                                />                                            
                            )
                    }
                    {
                        (!isChecked && isDescktopScreenSize) && (
                                <Icon
                                    name='unchecked'
                                    size={24}
                                    color='#000000'
                                />                                            
                            )
                    }
                    {
                        (isChecked && isDescktopScreenSize) && (
                                <Icon
                                    name='checked'
                                    size={24}
                                    color='#000000'
                                />                                            
                            )
                    } 
            </div>
            <span>{category}</span>        
        </CategoryItemWrapper>        
    );
};

CategoryItem.propTypes = {
    category: PropTypes.string.isRequired
}

export default CategoryItem;
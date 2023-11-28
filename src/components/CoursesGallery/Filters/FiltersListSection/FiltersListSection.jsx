import { useState } from 'react';
import { CategoryItem } from '../CategoryItem';
import PropTypes from 'prop-types';

import {
    ItemWrapper,
    SectionHeader,
    Title,
    StyledIcon,
    CategoriesList,
    PriceInputsContainer,
    PriceInput,
    Line,
} from './FiltersListSection.styled';


const FiltersListSection = ({ title, subcategories, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    const handleToggleItemContainer = () => {
        setIsOpen(!isOpen);
    };


    const handleChangePrice = ({ target: { name, value } }) => {
        switch (name) {
            case 'minPrice':
                setMinPrice(value);
                break;
            case 'maxPrice':
                setMaxPrice(value);
                break;    
        
            default:
                break;
        }
    }
    

    return (
        <ItemWrapper>
            <SectionHeader onClick={handleToggleItemContainer}>
                <Title>{title}</Title>
                <div>
                    <StyledIcon name={isOpen ? 'minus' : 'plus'} />                 
                </div>
            </SectionHeader>

            {
                isOpen && (
                    <>
                        {
                            <CategoriesList>
                                {
                                    subcategories && (
                                        subcategories.map(({ id, name }) => (
                                            <CategoryItem
                                                key={id}
                                                category={name}
                                            />                             
                                        ))
                                    )
                                }
                                {
                                    options && (
                                        options.map(({ id, option_name }) => (
                                            <CategoryItem
                                                key={id}
                                                category={option_name}
                                            />                             
                                        ))
                                    )
                                }
                                {
                                    title === 'Price for a lesson' && (
                                        <PriceInputsContainer>
                                                <PriceInput
                                                    name='minPrice'
                                                    type="number"
                                                    value={minPrice}
                                                    onChange={handleChangePrice}
                                                    min={1}
                                                    max={100}
                                                />

                                                <Line />
                                                
                                                <PriceInput
                                                    name='maxPrice'
                                                    type="number"
                                                    value={maxPrice}
                                                    onChange={handleChangePrice}
                                                    min={0}
                                                    max={100}
                                                />
                                        </PriceInputsContainer>
                                        
                                    )
                                }
                            </CategoriesList>                        
                        }                    
                    </>
                )
            }
        </ItemWrapper>
    );
};


FiltersListSection.propTypes = {
    title: PropTypes.string.isRequired,
    subcategories: PropTypes.array,
    options: PropTypes.array,
};


export default FiltersListSection;
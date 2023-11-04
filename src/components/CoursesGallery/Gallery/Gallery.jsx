import { useState } from "react";
import CoursesList from "../CoursesList/CoursesList";
import FiltersBtn from "../FiltersBtn/FiltersBtn";
import FiltersContainer from "../Filters/FiltersContainer/FiltersContainer";
import {
    Section,
    SortWrapper,
    MainContentWrapper,
} from "./Gallery.styled";


const Gallery = () => {
    const [isFiltersShown, setIsFiltersShown] = useState(false);


    const handleToggleFiltersList = () => {
        setIsFiltersShown(!isFiltersShown);
    };

    
    return (
        <Section>
            <SortWrapper>
                < FiltersBtn onClick={handleToggleFiltersList} />
            </SortWrapper>

            <MainContentWrapper>
                < FiltersContainer
                            isVisible={isFiltersShown}
                            onClick={handleToggleFiltersList}
                />
                < CoursesList isVisible={!isFiltersShown}/>  
            </MainContentWrapper>

        </Section>
    );
};

export default Gallery;
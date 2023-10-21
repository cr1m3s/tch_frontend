import { useState } from "react";
import CoursesList from "../CoursesList/CoursesList";
import FiltersBtn from "../FiltersBtn/FiltersBtn";
import FiltersContainer from "../Filters/FiltersContainer/FiltersContainer";
import {
    Section,
    Wrapper
} from "./Gallery.styled";


const Gallery = () => {
    const isDescktopScreenSize = window.matchMedia('(min-width: 1440px)').matches;
    const [isFiltersShown, setIsFiltersShown] = useState(false);


    const handleToggleFiltersList = () => {
        setIsFiltersShown(!isFiltersShown);
    };

    
    return (
        <Section>
            {
                isDescktopScreenSize
                    ? (
                        <>
                            < FiltersContainer /> 
                            < CoursesList />
                        </>
                    )
                    : (
                        <>
                            <Wrapper>
                                < FiltersBtn onClick={handleToggleFiltersList} />
                            </Wrapper>
                            
                            {
                                isFiltersShown 
                                    ? < FiltersContainer onClick={handleToggleFiltersList} />
                                    : < CoursesList />  
                            }
                        </>
                    )
            }
        </Section>
    );
};

export default Gallery;
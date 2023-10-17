import { useState } from "react";
import CoursesList from "../CoursesList/CoursesList";
import FiltersBtn from "../FiltersBtn/FiltersBtn";
import FiltersContainer from "../Filters/FiltersContainer/FiltersContainer";


const Gallery = () => {
    const isDescktopScreenSize = window.matchMedia('(min-width: 1440px)').matches;
    const [isFiltersShown, setIsFiltersShown] = useState(false);


    const handleToggleFiltersList = () => {
        setIsFiltersShown(!isFiltersShown);
    };

    return (
        <>
            {
                !isDescktopScreenSize && < FiltersBtn onClick={handleToggleFiltersList}/>
            }
            {
                isFiltersShown
                    ? < FiltersContainer onClick={handleToggleFiltersList} />
                    : < CoursesList />
            }
        </>
    );
};

export default Gallery;
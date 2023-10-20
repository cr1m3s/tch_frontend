import PropTypes from 'prop-types';
import { Button } from "../../../common";
import FiltersList from "../FiltersList/FiltersList";
import {
    Section
} from "./FiltersContainer.styled";


const FiltersContainer = ({ onClick }) => {
    const isDescktopScreenSize = window.matchMedia('(min-width: 1440px)').matches;

    return (
        <Section $desktop={isDescktopScreenSize}>
            <FiltersList />
            <Button
                variant="tertiary"
                size="standard"
                onClick={onClick}
                >Apply filtering
            </Button>                
        </Section>
    );
};

FiltersContainer.propTypes = {
    onClick: PropTypes.func,
};

export default FiltersContainer;
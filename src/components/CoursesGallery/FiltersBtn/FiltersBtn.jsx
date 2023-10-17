import { Icon } from "../../common";
import { Button } from "../../common";
import { FilterChildrens } from "./FiltersBtn.styled";
import PropTypes from 'prop-types';


const FiltersBtn = ({ onClick }) => {
    return (
        <Button size="filter" onClick={onClick}>
            <FilterChildrens>
                <span>Filters</span>
                <Icon name="filter" />
            </FilterChildrens>
        </Button>
    );
};

FiltersBtn.propTypes = {
    onClick: PropTypes.func
}

export default FiltersBtn;
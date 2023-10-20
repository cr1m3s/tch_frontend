import { FiltersListSection } from '../FiltersListSection';
import filterData from '../../../../filterData.json';
import {
    List
} from './FiltersList.styled';

const FiltersList = () => {
    return (
        <List>
            {
                filterData.map(({id, title, minPrice, maxPrice, categories}) => (
                    <FiltersListSection
                        key={id}
                        title={title}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        categories={categories}
                    />
                ))
            }
        </List>
    );
}

export default FiltersList;
import { StyledTitle } from './Title.styled';
import PropTypes from 'prop-types';


export const Title = ({ children, indent, size = [32], weight = 700 }) => {
    return (
        <StyledTitle
            $indent={indent}
            $size={size}
            $weight={weight}
        >
            {children}
        </StyledTitle>
    );
};

Title.propTypes = {
    children: PropTypes.string.isRequired,
    indent: PropTypes.number,
    size: PropTypes.arrayOf(PropTypes.number),
    weight: PropTypes.number,
};


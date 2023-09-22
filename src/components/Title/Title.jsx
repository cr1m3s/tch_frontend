import { StyledTitle } from "./Title.styled";
import PropTypes from 'prop-types';


const Title = ({ children, indent }) => {
    return (
        <StyledTitle
            $indent={indent}
        >
            {children}
        </StyledTitle>
    );
};

Title.propTypes = {
    children: PropTypes.string.isRequired,
    indent: PropTypes.number
};

export default Title;
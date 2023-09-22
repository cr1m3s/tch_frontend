import { StyledTitle } from "./Title.styled";
import PropTypes from 'prop-types';

const Title = ({ children }) => {
    return (
        <StyledTitle>{children}</StyledTitle>
    );
};

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;
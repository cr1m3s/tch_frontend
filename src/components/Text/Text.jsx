import { StyledText } from "./Text.styled";
import PropTypes from 'prop-types';

const Text = ({ children }) => {
    return (
        <StyledText>{children}</StyledText>
    );
};

Text.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Text;
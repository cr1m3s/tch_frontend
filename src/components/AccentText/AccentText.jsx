import { StyledAccentText } from "./AccentText.styled";
import PropTypes from 'prop-types';


const AccentText = ({ children, indent }) => {
    return (
        <StyledAccentText
            $indent={indent}
        >
            {children}
        </StyledAccentText>
    );
};

AccentText.propTypes = {
    children: PropTypes.string.isRequired,
    indent: PropTypes.number
};

export default AccentText;
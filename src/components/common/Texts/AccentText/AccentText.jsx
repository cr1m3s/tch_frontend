import { StyledAccentText } from './AccentText.styled';
import PropTypes from 'prop-types';


export const AccentText = ({ children, indent, size = 24 }) => {
    return (
        <StyledAccentText
            $indent={indent}
            $size={size}
        >
            {children}
        </StyledAccentText>
    );
};

AccentText.propTypes = {
    children: PropTypes.string.isRequired,
    indent: PropTypes.number,
    size: PropTypes.number,
};


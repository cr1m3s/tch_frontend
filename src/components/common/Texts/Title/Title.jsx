import { StyledTitle } from "./Title.styled";
import PropTypes from 'prop-types';


export const Title = ({ children, indent }) => {
    return (
        <StyledTitle $indent={indent} >
            {children}
        </StyledTitle>
    );
};

Title.propTypes = {
    children: PropTypes.string.isRequired,
    indent: PropTypes.number
};


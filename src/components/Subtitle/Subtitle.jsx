import PropTypes from 'prop-types';
import { StyledSubtitle } from './Subtitle.styled';

const Subtitle = ({ children }) => {
    return (
        <StyledSubtitle>{children}</StyledSubtitle>
    );
};

Subtitle.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Subtitle;
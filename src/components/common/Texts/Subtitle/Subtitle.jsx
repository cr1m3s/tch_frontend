import PropTypes from 'prop-types';
import { StyledSubtitle } from './Subtitle.styled';

export const Subtitle = ({ children }) => {
    return (
        <StyledSubtitle>{children}</StyledSubtitle>
    );
};

Subtitle.propTypes = {
    children: PropTypes.string.isRequired,
};


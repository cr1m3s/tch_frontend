import { Title } from "./FormTitle.styled";
import PropTypes from 'prop-types';

export const FormTitle = ({ children }) => {
    return (
        <Title>{children}</Title>
    );
};

FormTitle.propTypes = {
    children: PropTypes.string.isRequired,
};


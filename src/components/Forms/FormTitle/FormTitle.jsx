import { Title } from "./FormTitle.styled";
import PropTypes from 'prop-types';

const FormTitle = ({ children }) => {
    return (
        <Title>{children}</Title>
    );
};

FormTitle.propTypes = {
    children: PropTypes.string.isRequired,
};

export default FormTitle;
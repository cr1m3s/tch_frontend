import PropTypes from 'prop-types';
import { StyledMessage } from "./Message.styled";


export const Message = ({ children, indentTop, indentBottom }) => {
    return (
        <StyledMessage
            $indentTop={indentTop}
            $indentBottom={indentBottom}
        >
            {children}
        </StyledMessage>
    );
};

Message.propTypes = {
    children: PropTypes.string.isRequired,
    indentTop: PropTypes.number,
    indentBottom: PropTypes.number,
};


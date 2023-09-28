import PropTypes from 'prop-types';
import { StyledMessage } from "./Message.styled";


const Message = ({ children, indentTop, indentBottom, position }) => {
    return (
        <StyledMessage
            $indentTop={indentTop}
            $indentBottom={indentBottom}
            $position={position}
        >
            {children}
        </StyledMessage>
    );
};

Message.propTypes = {
    children: PropTypes.string.isRequired,
    indentTop: PropTypes.number,
    indentBottom: PropTypes.number,
    position: PropTypes.string
};

export default Message;
import PropTypes from 'prop-types';
import { StyledMessage } from "./Message.styled";


const Message = ({ children, indentTop, indentBottom, position, width }) => {

    return (
        <StyledMessage
            $indentTop={indentTop}
            $indentBottom={indentBottom}
            $position={position}
            $width={width}
        >
            {children}
        </StyledMessage>
    );
};

Message.propTypes = {
    children: PropTypes.string.isRequired,
    indentTop: PropTypes.number,
    indentBottom: PropTypes.number,
    position: PropTypes.string,
    width: PropTypes.number
};


export default Message;
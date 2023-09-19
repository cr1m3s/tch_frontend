import PropTypes from 'prop-types';
import { StyledButton, StyledIcon, StyledText } from './Button.styled';

export const Button = ({
    children,
    icon,
    variant,
    isDisabled,
    size,
    onClick,
    iconPosition,
}) => {
    return (
        <StyledButton
            disabled={isDisabled}
            onClick={onClick}
            size={size}
            variant={variant}
            type='submit'
        >
            {icon && <StyledIcon position={iconPosition} name={icon} />}
            <StyledText>{children}</StyledText>
        </StyledButton>
    );
};

Button.propTypes = {
    ...StyledButton.propTypes,
    children: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    iconPosition: StyledIcon.propTypes.position,
    // icon: StyledIcon.propTypes.name,
};

Button.defaultProps = {
    ...StyledButton.defaultProps,
    iconPosition: 'left',
};
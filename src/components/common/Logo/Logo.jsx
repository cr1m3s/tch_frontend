import PropTypes from 'prop-types';
import { LogoIcon } from '../Icon';
import { LogoFooter, } from './Logo.styled';

export const Logo = ({ variant }) => {
  return (
    <>
      {variant === 'footer' && (
        <LogoFooter to="/" variant={variant}>
          <LogoIcon name="logo-footer" />
        </LogoFooter>
      )}
    </>
  );
}

Logo.propTypes = {
  variant: PropTypes.oneOf(['header', 'footer', 'text']).isRequired,
};

import PropTypes from 'prop-types';
import { LogoIcon } from '../Icon';
import { LogoHeader, LogoFooter } from './Logo.styled';

export const Logo = ({ variant }) => {
  return (
    <>
      {variant === 'header' && (
        <LogoHeader to="/">
          <LogoIcon name='logo-header-text' />
        </LogoHeader>
      )}
      {variant === 'footer' && (
        <LogoFooter to="/">
          <LogoIcon name="logo-footer" />
        </LogoFooter>
      )}
    </>
  );
}

Logo.propTypes = {
  variant: PropTypes.oneOf(['header', 'footer']).isRequired,
};

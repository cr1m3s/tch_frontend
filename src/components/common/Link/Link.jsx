import PropTypes from 'prop-types';
import { StyledLink, StyledButtonLink } from './Link.styled';

export const LinkHeader = ({
  to, children, end, className,
}) => {

  return (
    <StyledLink className={className} end={end} toggle to={to} activeclassname="active">
      {children}
    </StyledLink>
  );
}

export const ButtonLink = ({
  to, children, end, className,
}) => {
  return (
    <StyledButtonLink className={className} end={end} to={to}>
      {children}
    </StyledButtonLink>
  );
}

LinkHeader.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  end: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  end: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};


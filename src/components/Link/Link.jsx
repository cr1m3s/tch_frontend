import PropTypes from 'prop-types';
import { StyledLink, StyledButtonLink } from './Link.styled';

export const LinkHeader = ({
  to, children, end, className, style
}) => {
  return (
    <StyledLink className={className} style={style} end={end} to={to} activeclassname="active">
      {children}
    </StyledLink>
  );
}

export const ButtonLink = ({
  to, children, end, className, style
}) => {
  return (
    <StyledButtonLink className={className} style={style} end={end} to={to}>
      {children}
    </StyledButtonLink>
  );
}

LinkHeader.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  end: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  end: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};


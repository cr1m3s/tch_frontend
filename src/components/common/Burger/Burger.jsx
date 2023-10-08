import PropTypes from 'prop-types'
import { StyledBurger } from './Burger.styled'

export const Burger = ({ onClick, isOpen }) => {

  return (
    <StyledBurger className='burger' isOpen={isOpen} onClick={onClick}>
      <span />
      <span />
      <span />
    </StyledBurger >
  )
}

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

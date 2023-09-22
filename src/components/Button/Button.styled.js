import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { inlineFlex } from '../../styles/mixins';
import { Icon } from '../Icon';

export const StyledIcon = styled(Icon)`
  transition: fill 0.2s ease-in-out;
  flex-shrink: 0;
  ${(props) =>
    props.position === 'right'
      ? css`
          order: 2;
          margin-left: 10px;
        `
      : css`
          margin-right: 10px;
        `}
`;

StyledIcon.propTypes = {
  name: Icon.propTypes.name,
  position: PropTypes.oneOf(['left', 'right']),
};

export const StyledButton = styled.button`
  cursor: pointer;
  ${inlineFlex('center', 'center')}
  &:disabled {
    cursor: not-allowed;
    background-color: #C7C7C7;
  }
  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          background: ${props.theme.colors.lightBlue};
          border-radius: 10px;
          border: none;
          transition: all 0.2s ease-in-out;
          &:not(:disabled):hover {
            background: ${props.theme.colors.blue};
          }
          &:not(:disabled):active {
            background: ${props.theme.colors.darkBlue};
          }
          &:disabled {
            background-color: ${props.theme.colors.disabled};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.white};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.white};
          }
          ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
        `;
      case 'secondary':
        return css`
          background-color: ${props.theme.colors.white};
          border-radius: 10px;
          border: 1px solid ${props.theme.colors.lightBlue};
          transition-property: border-color, background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          &:not(:disabled):hover {
            background-color: ${props.theme.colors.blue};
            border-color: ${props.theme.colors.blue};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
          }
          &:not(:disabled):active {
            background-color: ${props.theme.colors.darkBlue};
            border-color: ${props.theme.colors.darkBlue};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
          }
          &:disabled {
            border-color: ${props.theme.colors.disabled};
            background-color: ${props.theme.colors.disabled};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.lightBlue};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.lightBlue};
          }
        `;
    }
  }}
  
  ${(props) => {
    switch (props.size) {
      case 'standard':
        return css`
          height: 56px;
          min-width: 200px;
          padding: 0 12px;
          ${StyledText} {
            font-size: 18px;
            font-weight: 600;
          }
          ${StyledIcon} {
            width: 16px;
            height: 16px;
          }
        `;
      case 'fluid':
        return css`
          height: 48px;
          min-width: 100%;
          ${StyledText} {
            font-size: 18px;
            font-weight: 600;
          }
          ${StyledIcon} {
            width: 24px;
            height: 24px;
          }
        `;
    }
  }}
`;

StyledButton.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  size: PropTypes.oneOf(['standard', 'fluid']),
};

StyledButton.defaultProps = {
  variant: 'primary',
  size: 'standard',
};

export const StyledText = styled.span`
  transition: color 0.2s ease-in-out;
`;
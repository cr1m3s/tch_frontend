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
          margin-left: 4px;
        `
            : css`
          margin-right: 4px;
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
  }
  ${(props) => {
        switch (props.variant) {
            case 'primary':
                return css`
          background: ${props.theme.colors.gradientsButton};
          border-radius: 10px;
          border: none;
          transition: filter 0.2s ease-in-out;
          &:not(:disabled):hover {
            filter: brightness(1.2);
          }
          &:not(:disabled):active {
            filter: brightness(0.9);
          }
          &:disabled {
            background: none;
            background-color: ${props.theme.colors.N3};
            ${StyledText} {
              color: ${props.theme.colors.N5};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.white};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.white};
          }
        `;
            case 'white':
                return css`
          background-color: ${props.theme.colors.white};
          border-radius: 10px;
          border: none;
          transition: transform 0.2s ease-in-out;
          &:not(:disabled):hover {
            transform: translateY(-2px);
          }
          &:not(:disabled):active {
            transform: translateY(0px);
          }
          &:disabled {
            background-color: ${props.theme.colors.N3};
            ${StyledText} {
              color: ${props.theme.colors.N5};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.Purple5};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.Purple5};
          }
        `;
            case 'secondary':
                return css`
          background-color: ${props.theme.colors.white};
          border-radius: 10px;
          border: 1px solid ${props.theme.colors.Purple5};
          transition-property: border-color, background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          &:not(:disabled):hover {
            background-color: ${props.theme.colors.P1};
            border-color: ${props.theme.colors.P5};
            ${StyledText} {
              color: ${props.theme.colors.P5};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.P5};
            }
          }
          &:not(:disabled):active {
            background-color: ${props.theme.colors.Purple1};
            border-color: ${props.theme.colors.P6};
            ${StyledText} {
              color: ${props.theme.colors.P6};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.P6};
            }
          }

          &:disabled {
            border-color: ${props.theme.colors.N5};
            background-color: ${props.theme.colors.N3};
            ${StyledText} {
              color: ${props.theme.colors.N5};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.N5};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.Purple5};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.Purple5};
          }
        `;
            case 'secondary-inverted':
                return css`
          background-color: transparent;
          border-radius: 10px;
          border: 1px solid ${props.theme.colors.white};
          transition-property: border-color, background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          &:not(:disabled):hover {
            background-color: ${props.theme.colors.white};
            border-color: ${props.theme.colors.Purple5};
            ${StyledText} {
              color: ${props.theme.colors.Purple5};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.Purple5};
            }
          }
          &:not(:disabled):active {
            background-color: ${props.theme.colors.white};
            border-color: ${props.theme.colors.white};
            ${StyledText} {
              color: ${props.theme.colors.Purple5};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.Purple5};
            }
          }

          &:disabled {
            border-color: ${props.theme.colors.N5};
            background-color: ${props.theme.colors.N3};
            ${StyledText} {
              color: ${props.theme.colors.N5};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.N5};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.white};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.white};
          }
        `;
            case 'subtle':
                return css`
          background-color: transparent;
          text-decoration: none;
          border: none;
          ${StyledText} {
            font-weight: 500;
            font-size: 12px;
            transition: color 0.2s ease-in-out;
            color: ${props.theme.colors.Purple5};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.Purple5};
          }
          &:not(:disabled):hover {
            ${StyledText} {
              color: ${props.theme.colors.P5};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.P5};
            }
          }
          &:not(:disabled):active {
            ${StyledText} {
              color: ${props.theme.colors.P6};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.P6};
            }
          }
          &:disabled {
            ${StyledText} {
              color: ${props.theme.colors.N7};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.N7};
            }
          }
        `;
        }
    }}
  ${(props) => {
        switch (props.size) {
            case 'standard':
                return css`
          height: 32px;
          padding: 0 26px;
          ${StyledText} {
            font-size: 12px;
            font-weight: 500;
          }
          ${StyledIcon} {
            width: 16px;
            height: 16px;
          }
        `;
            case 'big':
                return css`
          height: 48px;
          min-width: 242px;
          ${StyledText} {
            font-size: 16px;
            font-weight: 500;
          }
          ${StyledIcon} {
            width: 20px;
            height: 20px;
          }
        `;
        }
    }}
`;

StyledButton.propTypes = {
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'subtle',
        'white',
        'secondary-inverted',
    ]),
    size: PropTypes.oneOf(['standard', 'big']),
};

StyledButton.defaultProps = {
    variant: 'primary',
    size: 'standard',
};

export const StyledText = styled.span`
  transition: color 0.2s ease-in-out;
`;
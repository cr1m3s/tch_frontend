import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-family: 'Montserrat';
  font-weight:  ${(props) => props.$weight};
  font-size: ${(props) =>`${ props.$size[0]}px`};
  line-height: 120%;
  margin-bottom: ${(props) => `${props.$indent}px`};
  color: ${(props) => props.theme.colors.primaryText};

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.$size[1]};
  }
`;

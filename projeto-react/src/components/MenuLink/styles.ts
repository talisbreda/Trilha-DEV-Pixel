import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface Props {
  theme: Theme;
  href: string;
  target: string;
}

export const Container = styled.a<Props>`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size; ${theme.font.sizes.tiny};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.75rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;

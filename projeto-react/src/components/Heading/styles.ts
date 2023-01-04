import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Theme } from '../../styles/theme';

interface Props {
  theme: Theme;
  darkColor: boolean;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: 'huge' | 'large' | 'medium' | 'small';
  upperCase: boolean;
}

type sizes = {
  small: (theme: Theme) => FlattenSimpleInterpolation;
  medium: (theme: Theme) => FlattenSimpleInterpolation;
  large: (theme: Theme) => FlattenSimpleInterpolation;
  huge: (theme: Theme) => FlattenSimpleInterpolation;
};

const mediaFont = (theme: Theme) => css`
  @media ${theme.media.ltMedium} {
    font-size: ${theme.font.sizes.large}
  }
`;

const titleSize: sizes = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
    ${mediaFont(theme)};
  `,
};

const titleCase = (upperCase: boolean) => css`
  text-transform: ${upperCase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<Props>`
  ${({ theme, darkColor, size, upperCase }) => {
    return css`
        color: ${darkColor ? theme.colors.primaryColor : theme.colors.white};
        ${titleSize[size](theme)};
        ${titleCase(upperCase)};
    `;
  }}
`;

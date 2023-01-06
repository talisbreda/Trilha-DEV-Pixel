import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Title } from '../Heading/styles';

interface Props {
  theme: Theme;
}

export const Container = styled.div<Props>`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.ltMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.huge};
    }
  `}
`;

export const TextContainer = styled.div<Props>`
  ${({ theme }) => css`
    @media ${theme.media.ltMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div<Props>`
  ${() => css``}
`;

export const Image = styled.img<Props>`
  ${() => css``}
`;

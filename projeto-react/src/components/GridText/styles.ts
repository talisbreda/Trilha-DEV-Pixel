import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Theme } from '../../styles/theme';
import { Title as HeadingContainer } from '../Heading/styles';

interface Props {
  theme: Theme;
}

export const Container = styled.div<Props>`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div<Props>`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large}
  `}
`;

export const GridElement = styled.div<Props>`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: -3rem;
      left: -5rem;
      transform: rotate(5deg);
    }
  `}
`;

import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface Props {
  theme: Theme;
  href: string;
}

export const Container = styled.a<Props>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      max-height: 3rem;
    }
  `}
`;

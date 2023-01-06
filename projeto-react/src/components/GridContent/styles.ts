import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface Props {
  theme: Theme;
}

export const Container = styled.div<Props>`
  ${({ theme }) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`;

export const Html = styled.div<Props>`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge} 0;
  `}
`;

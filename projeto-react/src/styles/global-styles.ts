import { createGlobalStyle, css } from 'styled-components';
import { theme1 } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${({ theme }: { theme: typeof theme1 }) => css`
      background: ${theme.mainBg}
    `}
  }
`;

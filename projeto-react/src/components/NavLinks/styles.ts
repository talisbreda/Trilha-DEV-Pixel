import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface Props {
  theme: Theme;
}

export const Container = styled.nav<Props>`
  ${({ theme }) => css`
    background: #fff;
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.ltMedium} {
      flex-flow: column nowrap;
      align-items: center;
    }
  `}
`;

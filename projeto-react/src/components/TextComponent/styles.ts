import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

export const Container = styled.p`
  ${({ theme }: { theme: Theme }) => css`
    font-size: ${theme.font.sizes.medium}
  `}
`;

import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>);
};

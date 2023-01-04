import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { defaultTheme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading as='h2'>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: defaultTheme.colors.primaryColor,
      'font-size': defaultTheme.font.sizes.large,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading darkColor={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: defaultTheme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size='small'>texto</Heading>);
    let heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': defaultTheme.font.sizes.small,
    });

    rerender(
      <ThemeProvider theme={defaultTheme}>
        <Heading size='large'>texto</Heading>
      </ThemeProvider>,
    );

    heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': defaultTheme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={defaultTheme}>
        <Heading size='medium'>texto</Heading>
      </ThemeProvider>,
    );

    heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      'font-size': defaultTheme.font.sizes.medium,
    });
  });
});

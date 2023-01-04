import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLinks } from '.';

describe('<LogoLinks />', () => {
  it('should render', () => {
    renderTheme(<LogoLinks link='#target' text='aaa' />);
    const heading = screen.getByRole('heading', { name: 'aaa' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
    screen.debug(heading);
  });

  it('should render text logo', () => {
    renderTheme(<LogoLinks link='#target' text='aaa' imageSrc='image.jpg' />);
    screen.getByRole('heading', { name: 'aaa' });
    expect(screen.getByAltText('aaa')).toHaveAttribute('src', 'image.jpg');
  });
});

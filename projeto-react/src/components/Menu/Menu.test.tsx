import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoData, Menu } from '.';
import mock from '../NavLinks/mock';
import 'jest-styled-components';

const logoData: LogoData = {
  link: '#target',
  text: 'Logo',
  imageSrc: '',
};

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={mock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={mock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');

    expect(button).toHaveStyleRule('display', 'none');
  });
});

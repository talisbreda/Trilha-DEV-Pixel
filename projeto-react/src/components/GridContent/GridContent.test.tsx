import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid content', () => {
    const { container } = renderTheme(
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      <GridContent {...mock} background={false} />,
    );
    expect(container).toMatchSnapshot();
  });
});

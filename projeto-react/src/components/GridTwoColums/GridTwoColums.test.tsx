import { renderTheme } from '../../styles/render-theme';
import { GridTwoColums } from '.';
import mock from './mock';

describe('<GridTwoColums />', () => {
  it('should render two column grid', () => {
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    const { container } = renderTheme(<GridTwoColums {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

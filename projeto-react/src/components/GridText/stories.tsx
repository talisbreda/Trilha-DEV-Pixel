import { GridText } from '.';
import { GridTextMock, mock } from './mock';

const args = mock;

export default {
  title: 'GridText',
  component: GridText,
  args,
};

export const Template = (argss: GridTextMock) => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <GridText {...argss} />
    </div>
  );
};

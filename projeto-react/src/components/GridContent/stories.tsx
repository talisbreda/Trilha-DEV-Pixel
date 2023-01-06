import { GridContent } from '.';
import mock from './mock';

interface Args {
  title: string;
  html: string;
  background: boolean;
}

const args: Args = mock;

export default {
  title: 'GridContent',
  component: GridContent,
  args,
};

export const Template = (argss: Args) => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <GridContent {...argss} />
    </div>
  );
};

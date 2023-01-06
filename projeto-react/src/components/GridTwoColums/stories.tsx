import { GridTwoColums } from '.';
import mock from './mock';

interface Args {
  title: string;
  text: string;
  imageSrc: string;
  background: boolean;
}

const args: Args = mock;

export default {
  title: 'Grid two colums',
  component: GridTwoColums,
  args,
};

export const Template = (argss: Args) => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <GridTwoColums {...argss} />
    </div>
  );
};

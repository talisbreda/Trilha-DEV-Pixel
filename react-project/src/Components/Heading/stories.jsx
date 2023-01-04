import { Heading } from '.';

const heading = {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'aaaa',
    light: false,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default heading;

export const Template = (args) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Heading {...args} />;
};

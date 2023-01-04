import { Heading } from '.';

const heading = {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'aaaa',
    upperCase: false,
    size: 'medium',
  },
  argTypes: {
    children: 'string',
    upperCase: 'boolean',
    size: 'string',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default heading;

export const Light = (args: object) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Heading {...args} />;
};
export const Dark = (args: object) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Heading {...args} />;
};

Light.args = {
  darkColor: true,
};
Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  darkColor: false,
};

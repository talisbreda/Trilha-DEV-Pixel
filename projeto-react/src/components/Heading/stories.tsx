import { Heading } from '.';

interface Args {
  children: React.ReactNode | string;
}

const args: Args = {
  children: 'aaaa',
};

const heading = {
  title: 'Heading',
  component: Heading,
  args,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default heading;

export const Light = (argss: Args) => {
  const { children, ...props } = argss;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Heading {...props}>{children}</Heading>;
};
export const Dark = (argss: Args) => {
  const { children, ...props } = argss;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Heading {...props}>{children}</Heading>;
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

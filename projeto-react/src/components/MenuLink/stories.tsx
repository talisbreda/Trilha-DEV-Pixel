import { MenuLink } from '.';

interface Args {
  children: React.ReactNode | string;
  link: string;
}

const args: Args = {
  children: 'MenuLink',
  link: 'https://www.google.com',
};

export default {
  title: 'MenuLink',
  component: MenuLink,
  args,
};

export const Template = (argss: Args) => {
  const { children, ...props } = argss;

  return (
    <div style={{ display: 'flex' }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <MenuLink {...props}>{children}</MenuLink>
    </div>
  );
};

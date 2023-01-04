import { Link, NavLinks } from '.';
import links from './mock';

interface Args {
  links: Array<Link>;
}

const args: Args = {
  links,
};

export default {
  title: 'NavLinks',
  component: NavLinks,
  args,
};

export const Template = (argss: Args) => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <NavLinks {...argss} />
    </div>
  );
};

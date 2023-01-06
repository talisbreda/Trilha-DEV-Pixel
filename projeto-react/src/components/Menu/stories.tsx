import { LogoData, Menu } from '.';
import { Link } from '../NavLinks';
import mock from '../NavLinks/mock';

interface Args {
  links: Array<Link>;
  logoData: LogoData;
}

const args: Args = {
  links: mock,
  logoData: {
    text: 'Logo',
    link: '#target',
    imageSrc: '',
  },
};

export default {
  title: 'Menu',
  component: Menu,
  args,
};

export const Template = (argss: Args) => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Menu {...argss} />
    </div>
  );
};

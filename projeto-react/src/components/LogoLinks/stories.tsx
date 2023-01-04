import { LogoLinks } from '.';

interface Args {
  text: string;
  link: string;
  imageSrc: string;
}

const args: Args = {
  text: 'aaa',
  link: 'aaaaaa',
  imageSrc: 'assets/images/logo.svg',
};

export default {
  title: 'LogoLinks',
  component: LogoLinks,
  args,
};

export const ImageOnly = (argss: Args) => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <LogoLinks {...argss} />
    </div>
  );
};

export const TextOnly = (argss: Args) => {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <LogoLinks {...argss} />
    </div>
  );
};

TextOnly.args = {
  imageSrc: '',
};

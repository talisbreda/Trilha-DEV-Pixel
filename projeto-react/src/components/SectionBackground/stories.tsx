import { SectionBackground } from '.';

interface Args {
  children: React.ReactNode | string;
  background: boolean;
}

const args: Args = {
  children: (
    <div>
      <h1>SectionBackground</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam
        vero nihil quia corrupti non asperiores ab excepturi quam velit iure
        iste laudantium, eos repellat esse minima praesentium similique dolorum!
      </p>
    </div>
  ),
  background: true,
};

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args,
};

export const Template = (argss: Args) => {
  const { children, ...props } = argss;

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SectionBackground {...props}>{children}</SectionBackground>
    </div>
  );
};

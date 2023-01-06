import { TextComponent } from '.';

interface Args {
  children: string;
}

const args: Args = {
  children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Beatae cum aliquid non, veniam atque vitae autem,
    excepturi eligendi soluta eaque ut quae nobis?
    Et quam, molestias quae voluptates ipsam ad.`,
};

export default {
  title: 'TextComponent',
  component: TextComponent,
  args,
};

export const Template = (argss: Args) => {
  const { children, ...props } = argss;

  return (
    <div style={{ maxWidth: '64rem', padding: '3rem' }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <TextComponent {...props}>{children}</TextComponent>
    </div>
  );
};

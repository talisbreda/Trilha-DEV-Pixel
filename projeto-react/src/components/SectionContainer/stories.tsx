import { SectionContainer } from '.';

interface Args {
  children: React.ReactNode | string;
}

const args: Args = {
  children: (
    <div>
      <h1>SectionContainer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        soluta, aperiam aliquam quo reiciendis, rerum similique et quisquam
        autem itaque dolores dolorum ullam pariatur ducimus cumque eius eum
        possimus perferendis?
      </p>
    </div>
  ),
};

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args,
};

export const Template = (argss: Args) => {
  const { children, ...props } = argss;

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SectionContainer {...props}>{children}</SectionContainer>
    </div>
  );
};

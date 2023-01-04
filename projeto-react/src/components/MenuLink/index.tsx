import * as Styled from './styles';

export const MenuLink = ({
  children,
  link,
  newTab = false,
}: {
  children?: React.ReactNode;
  link: string;
  newTab?: boolean;
}) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.defaultProps = {
  children: 'aaaa',
  newTab: false,
};

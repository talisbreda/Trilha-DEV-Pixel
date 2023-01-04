import { MenuLink } from '../MenuLink';
import * as Styled from './styles';

export interface Link {
  children: React.ReactNode | string;
  link: string;
  newTab: boolean;
}

export const NavLinks = ({ links = [] }: { links: Array<Link> }) => {
  return (
    <Styled.Container>
      {links.map((link) => {
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        return <MenuLink key={link.link} {...link} />;
      })}
    </Styled.Container>
  );
};

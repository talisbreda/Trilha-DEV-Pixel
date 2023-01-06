import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';
import { LogoLinks } from '../LogoLinks';
import { Link, NavLinks } from '../NavLinks';
import mock from '../NavLinks/mock';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export interface LogoData {
  text: string;
  link: string;
  imageSrc?: string;
}

export const Menu = ({
  links,
  logoData,
}: {
  links?: Array<Link>;
  logoData: LogoData;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label='Open/close menu'
      >
        {visible ? (
          <CloseIcon aria-label='Open menu' />
        ) : (
          <MenuIcon aria-label='Close menu' />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <LogoLinks {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.defaultProps = {
  links: mock,
};

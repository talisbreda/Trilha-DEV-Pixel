import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({
  children,
  background,
}: {
  children?: React.ReactNode;
  background: boolean;
}) => {
  return (
    <Styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.defaultProps = {
  children: 'aaaa',
};

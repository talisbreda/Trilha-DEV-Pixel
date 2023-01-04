import * as Styled from './styles';

export const SectionContainer = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.defaultProps = {
  children: 'aaaa',
};

import * as Styled from './styles';

export const TextComponent = ({ children }: { children?: React.ReactNode }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

TextComponent.defaultProps = {
  children: 'aaaa',
};

import * as Styled from './styles';

export const TextComponent = ({ children }: { children: string }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

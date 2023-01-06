import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridContent = ({
  title,
  html,
  background = false,
}: {
  title: string;
  html: string;
  background: boolean;
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading upperCase darkColor={!background}>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

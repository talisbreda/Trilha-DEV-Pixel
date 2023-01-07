import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { GridTextElement } from './mock';
import * as Styled from './styles';

export const GridText = ({
  background,
  title,
  description,
  grid,
}: {
  background: boolean;
  title: string;
  description: string;
  grid: Array<GridTextElement>;
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size='huge' upperCase darkColor={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size='medium' darkColor={!background}>
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

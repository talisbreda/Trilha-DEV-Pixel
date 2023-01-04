import { Heading } from '../Heading';
import * as Styled from './styles';

export const LogoLinks = ({
  text,
  link,
  imageSrc = '',
}: {
  text: string;
  link: string;
  imageSrc?: string;
}) => {
  return (
    <Heading size='small' upperCase>
      <Styled.Container href={link}>
        {!!imageSrc && <img src={imageSrc} alt={text} />}
        {!imageSrc && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLinks.defaultProps = {
  imageSrc: 'assets/images/logo.svg',
};

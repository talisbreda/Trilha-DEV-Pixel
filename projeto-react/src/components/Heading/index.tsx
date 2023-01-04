import * as Styled from './styles';

export const Heading = ({
  children,
  darkColor = true,
  as = 'h1',
  size = 'medium',
  upperCase = false,
}: {
  children?: React.ReactNode;
  darkColor?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'huge' | 'large' | 'medium' | 'small';
  upperCase?: boolean;
}) => {
  return (
    <Styled.Title
      darkColor={darkColor}
      as={as}
      size={size}
      upperCase={upperCase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.defaultProps = {
  children: 'aaaa',
  darkColor: true,
  as: 'h1',
  size: 'large',
  upperCase: false,
};

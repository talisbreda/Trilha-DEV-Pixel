export type Theme = {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    white: string;
    mediumGray: string;
  };
  font: {
    family: {
      default: string;
      secondary: string;
    };
    sizes: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      huge: string;
      xhuge: string;
    };
  };
  spacings: {
    tiny: string;
    small: string;
    medium: string;
    large: string;
    huge: string;
    xhuge: string;
  };
  media: {
    ltMedium: string;
  };
};

export const defaultTheme: Theme = {
  colors: {
    primaryColor: '#0a1128',
    secondaryColor: '#dc143c',
    white: '#fff',
    mediumGray: '#ddd',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif;",
      secondary: "'Montserrat', sans-serif;",
    },
    sizes: {
      tiny: '1.6rem',
      small: '2.4rem',
      medium: '3.2rem',
      large: '4.0rem',
      huge: '4.8rem',
      xhuge: '6.4rem',
    },
  },
  spacings: {
    tiny: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    huge: '4.8rem',
    xhuge: '6.4rem',
  },
  media: {
    ltMedium: '(max-width: 768px)',
  },
};

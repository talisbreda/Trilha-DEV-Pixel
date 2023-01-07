export type GridTextElement = {
  title: string;
  description: string;
};

export type GridTextMock = {
  background: boolean;
  title: string;
  description: string;
  grid: Array<GridTextElement>;
};

export const mock: GridTextMock = {
  background: false,
  title: 'My grid',
  description:
    'Aliquam ac quam posuere, sagittis erat sit amet, eleifend felis. Sed ullamcorper ornare gravida.',
  grid: [
    {
      title: 'Teste 1',
      description: `Donec tincidunt tincidunt massa ac volutpat. Quisque vitae diam pretium
        porta purus nec, vulputate mauris. Vivamus vitae dapibus tortor. Ut eu gravida
        felis. In dictum dolor consequat, porta ante nec, viverra magna. Morbi nec erat eros.
        In vitae ipsum eget odio congue tristique non quis odio.'`,
    },
    {
      title: 'Teste 2',
      description: `Donec tincidunt tincidunt massa ac volutpat. Quisque vitae diam pretium
        porta purus nec, vulputate mauris. Vivamus vitae dapibus tortor. Ut eu gravida
        felis. In dictum dolor consequat, porta ante nec, viverra magna. Morbi nec erat eros.
        In vitae ipsum eget odio congue tristique non quis odio.'`,
    },
    {
      title: 'Teste 3',
      description: `Donec tincidunt tincidunt massa ac volutpat. Quisque vitae diam pretium
        porta purus nec, vulputate mauris. Vivamus vitae dapibus tortor. Ut eu gravida
        felis. In dictum dolor consequat, porta ante nec, viverra magna. Morbi nec erat eros.
        In vitae ipsum eget odio congue tristique non quis odio.'`,
    },
  ],
};

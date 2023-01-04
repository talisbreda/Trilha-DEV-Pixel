import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../src/styles/global-styles'
import { theme1 } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme1.colors.white
      },
      {
        name: 'dark',
        value: theme1.colors.primaryColor
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme1}>
      <Story />
      <GlobalStyles></GlobalStyles>
    </ThemeProvider>
  ),
];

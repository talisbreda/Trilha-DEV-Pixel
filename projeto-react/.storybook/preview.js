import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../src/styles/global-styles'
import { defaultTheme } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: defaultTheme.colors.white
      },
      {
        name: 'dark',
        value: defaultTheme.colors.primaryColor
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
      <GlobalStyles></GlobalStyles>
    </ThemeProvider>
  ),
];

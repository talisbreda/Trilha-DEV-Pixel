import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import { theme1 } from './styles/theme';
import App from './templates/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme1}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

import App from './App.tsx';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>,
);

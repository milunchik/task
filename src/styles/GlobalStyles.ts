import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 18px;
    scroll-behavior: smooth;
  }

  body{
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.text_color};
  }

   .no-scroll {
    overflow: hidden;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    font-family: inherit;
    padding: unset;
    border: none;
    background: none;
  }

  input, textarea {
    font-family: inherit;
  }

`;

export default GlobalStyles;

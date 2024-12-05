import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #cccccc;
    --background-color: #ffffff;
    --text-color: #333333;
    --transition: all 0.3s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.7;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }
`;

export default GlobalStyles;

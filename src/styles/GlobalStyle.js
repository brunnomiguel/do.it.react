import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #f5f5f5;
    --vanilla: #F1EDE0;
    --black: #0C0D0D;
    --orange: #C85311;
    --gray: #666360
  }

  body {
    background: var(--vanilla);
    color: var(--black);
  }
  body, input, button {
    font-family: "PT Serif", serif;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
export default GlobalStyle;

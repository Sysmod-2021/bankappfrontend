// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
 
export default GlobalStyle;
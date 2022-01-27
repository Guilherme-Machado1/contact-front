import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: gray;
    color: white;
    overflow-x: hidden;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: red;
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover{
    filter: brightness(50%);
  }

  a {
    text-decoration: none;
    color: yellow;
  }

  ul {
    list-style: none;
  }
`;

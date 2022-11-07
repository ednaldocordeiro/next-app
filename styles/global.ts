import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  html {
    color: #000;
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  .btn {
    gap: 1rem;
    display: flex;
    border-radius: 5px;
    transition: all .2s;
    padding: 1.2rem 2.5rem;
    justify-content: center;
  }

  .btn-primary {
    color: #fff;
    background-color: #000;
  }

  .btn-secondary {
    color: #fff;
    background-color: #0070F3;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(1.3);
  }
`
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    color: #000;
  }
  
  body, input, button, text-area {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: '#000';
  }

  img, button, a {
    user-select: none;
  }

  main{
    padding: 0 75px;
  }

  h1 {
    text-align: center;
    font-size: 80px;
    user-select: none;
  }

  p {
    font-size: 1.2rem;
    width: 100%;
  }

  p + p {
    margin-top: 2rem;
  }

  .btn {
    padding: 1rem 1.5rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .btn-primary {
    color: #fff;
    background-color: #000;
  }

  .btn-secondary {
    color: #fff;
    background-color: #0070F3;
  }

  a {
    text-decoration: none;
  }

  button:hover {
    filter: brightness(1.3);
    cursor: pointer;
  }
`

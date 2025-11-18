import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, #root{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  body{
    margin: 0;
    width: 440px;
    font-family: ${({ theme }) => theme.font.family}; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid black;
  }
  ul{
    list-style: none;
  }
`;

import { createGlobalStyle } from 'styled-components';
//import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
        background-color: rgb(105, 201, 159);
  }

  h1, h2, h3, h4, h5, h6, p, ul{
    margin:0; padding:0;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;

    max-width: 100%;
    object-fit: cover;
  }
`;

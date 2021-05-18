import { createGlobalStyle } from "styled-components";

export const whiteColor = "#fff";
export const pinkColor = "#ea5152";
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Montserrat',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color:#18191a;

  .button_chat{
    background-color:${pinkColor};
    color:${whiteColor};
    width:150px;
    transition: 100ms linear;
    
 
    }
  h1,h2{
    color:${pinkColor};
    border-bottom:1px solid #7e9ae4;
    margin-top:1rem;
    padding:1rem;
  }

    a{
      text-decoration:none;
      color:${whiteColor};
    }
    a:hover{
      color:${pinkColor};
    }
    .button_chat:hover{
      background-color:transparent;
      color:#f1f1f1;
      border:2px solid ${pinkColor};
  
  }
  }
`;

export default GlobalStyle;

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
    //background: linear-gradient(70deg, #28191a, #18191a);
    background: repeating-radial-gradient(#18191a, #18191a 10px, #28191a 5px, #18191a 15px);
  

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
    text-align:center;
  }
    a{
      text-decoration:none;
      color:${whiteColor};
      text-align:center;
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
  .container {
  position: relative;
  width: 100%;
  
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: ${whiteColor};
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.container:hover .overlay {
  bottom: 0;
  height: 100%;
  cursor:pointer;
}

.text {
  white-space: wrap; 
  color: #01010a;
  font-size: 0.7rem;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.body__content{
  color:${whiteColor};
  }

`;

export default GlobalStyle;

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
    background:#030417;
    background: repeating-radial-gradient(#030417, #030417 10px, #030417 5px, #030417 15px);
    

  .button_chat{
    background-color:${pinkColor};
    color:${whiteColor};
    width:100px;
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
  box-shadow: 2px -10px 153px 75px rgba(0,0,0,0.87) inset;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
  color:${whiteColor};
}

.container:hover .overlay {
  bottom: 0;
  height: 100%;
  cursor:pointer;
  color:${whiteColor};
  
}

.text {
  white-space: wrap; 
  //color: #01010a;
  font-size: 1.2rem;
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

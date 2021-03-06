import Styled from "styled-components";
import { whiteColor, pinkColor } from "../../theme/GlobalStyle.styles";

export const Wrapper = Styled.div`  
background-color: #fff;
color: #030417;
max-width: 100%;
 margin:0;
padding:0.5rem;
z-index:999;
display:flex;
justify-content:space-evenly;
align-items:center;
text-transform:uppercase;

ul{
display:flex;
flex-direction: column;
justify-content:space-evenly;
align-items:space-between;
text-transform:uppercase;


li{
    color: #000;
display:block;
text-underline:none;
 margin:0.5rem;
 li:hover{
     color:#ea5152;
 }
a{
    color: #000;
    margin:2rem;
    a:hover{
        color:#ea5152;
    }
}
}}
div>input{
outline:none;
padding:0.8rem;
border-radius:10px;
border:0;

}
.navbar__collapse{
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
}
.navbar__nav{
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
}

.navbar__search{
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
}

.btn-click{
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
}

.logo{
fon-size:7rem;
color:#ea5152;
font-weight:bold;
}
.button_chat{
    background-color:${pinkColor};
    color:${whiteColor};
    width:150px;
    transition: 100ms linear;

}

`;

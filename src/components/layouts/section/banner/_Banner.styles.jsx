import Styled from "styled-components";

export const Wrapper = Styled.div`
height:500px;
position: relative;
right: 0;
left: 0;
top: 0;
bottom: 0;

img{
    max-width:100%;
    height:auto;
  
}
.img-custom{
 
    height:500px;
    object-fit: cover;
   
}
.button_chat{
    font-size:20px;
    font-weight:bold;
    width:100%;
    text-transform: capitalize;
}
.bg__transparent{
    height:300px;
    width:100%;
    position:absolute;
    top:0;
    right: 0;
    bottom:0;
    z-index:0;
background: rgb(3,2,23);
background: linear-gradient(360deg, rgba(3,2,23,1) 24%, rgba(158,36,49,0.6530987394957983) 67%);
    background: rgb(3,2,23);
background: linear-gradient(360deg, rgba(3,2,23,1) 24%, rgba(158,36,49,0.5970763305322129) 67%);
    padding-top:200px;

    h1{
        border:0;
        color:white;
        font-weight: normal;
        
        span{
            font-weight: bold;
            font-size: 3rem;
            text-transform:uppercase;
            @media screen and (max-width:800px){
            &{
            font-size: 2rem;
        
        }
        }
        
    }
}
@media screen and (max-width:800px){
    .img-custom{
    height:100px;
   
}
h1{font-size:18px;}
 span{font-size: 20px;}
.button_chat{
    font-size:16px;
}
@media (max-width:300px){
    .img-custom{
    height:50px;
   
}
.button_chat{
    font-size:10px;
}
h1{font-size:16px;}
 span{font-size: 18px;}
}
`;

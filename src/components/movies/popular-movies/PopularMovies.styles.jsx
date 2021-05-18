import Styled from "styled-components";
import { whiteColor,pinkColor} from "../../theme/GlobalStyle.styles";

export const Wrapper = Styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 width:100%;
 box-shadow: 12px 12px 50px -35px lightblue;
 border-radius:0 0 20px 20px;
 height:100%;
 margin-top:2rem;
 transform:scale(1);
 transition: transform 550ms;
 overflow: hidden;
 &:hover{
    padding:0.5rem;
    transform:scale(.9);
 }
.mt-2{margin-top:2rem;}
 button{
     border:0 0 20px 20px;
 }
 
 div{
     
     height:100%;
     width: 100%;
     border-radius:0 0 20px 20px;


 }

.card {
    width: 100%;
  box-shadow: 10px 5px 40px 20px darken(#341cac, 5%);
  &:hover {
    box-shadow: 10px 5px 40px 20px darken(#341cac, 10%);
    cursor: pointer;
   
    
    .button-primary {
      transform: translate(10px, 0);
    }
  }
}


.card__header {
  height: 150px;
  width: 100%;
  width:100%;
  background-size:cover;
  color:${whiteColor};;
  img{
     height:100%;
     width:100%;
     object-fit:cover;
     
 }
 
}

.card__header--title {
  text-transform: uppercase;
  margin: 0;
}

.card__body {
  background-color:${whiteColor};
  height:45%;
  position:relative;
 
  
 
}
.movies-rated-over{
  display:none;
   position:absolute;
   top:0;
   right:0;
   left:0;
   background-color:${whiteColor};
   transform:translateX(100%);
 
 }

 .card__body:hover{
  transform:translateY(0%);.movies-rated-over{
    display:block;
  }
 }
.date {
  font-size: 11px;
  font-weight: 600;
  color: grey;
}

.body__content {
  font-size: 13px;
}

.button-primary {
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color:transparent;
  color: $blue;
  font-size: 15px;
  transition:.25s;
  
  i{
    padding-right:4px;
  }
}


.designer-link {
  color:${whiteColor};
  text-align:center;
  fon-size: 12px;
  text-decoration: none;
  display:block;
}

 
`;

import Styled from "styled-components";

export const Wrapper = Styled.header`
    margin:0;
    width:100%;
  .navbar{
     width:100%;
      padding:0.5rem;
      color:white;
      z-index:999;
      display:flex;
     justify-content:space-between;
     align-items:center;
     text-transform:uppercase;
     position:fixed;
     z-index:999;
     &.sticky{background-color:#030417;}
  }
  ul{
    display:flex;
    justify-content:space-evenly;
     align-items:center;

    li{
    display:inline;
    text-underline:none;
    padding-left:2rem;
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
    margin-right:3rem;
    padding:0 6rem;
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
    color:#ccd6e6;
    font-weight:700;
    &.sticky{ 
    color:#ea5152;
  }
  
  }
  
  
 @media screen and (min-width:768px){
  .inputSearch{
    width: 400px;
    margin-right:10rem;
    outline:none;
    padding:0.8rem;
    border:0;
    border-radius:40px;
    font-size:16px;

  }
 }
 @media screen and (max-width:768px){
  .inputSearch{
    width: 0px;
    margin-right:0rem;
    outline:none;
    padding:0rem;
    border:0;
    border-radius:0px;
    font-size:0px;

  }
  ul>li, .btn-click{
    display:none;
  }
  
 }
 
  
 


`;

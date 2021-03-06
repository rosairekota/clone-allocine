import Styled from "styled-components";

export const Wrapper = Styled.div`
 padding:5rem 0;

 p{
     color:#fff;
     line-height: 2;
 }
 .movie-detail-title{
     font-size:2.5rem;
     color: #fff;
     border:0;
     text-align:justify;
 }
 .detailmovie-flex{
     display:flex;
     flex-direction:row;
     justify-content:flex-start;
     .circle-progress{width: 100px;height: 100px };
     .movie-users{
         font-size: 1.5rem;
         padding-left:1rem;
     }
 }
 
`;

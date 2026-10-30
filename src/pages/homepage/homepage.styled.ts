import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const HomePageStyled = styled.section`
 ${Reset}
 background-color: #27282B;
    h1{
     text-align: center;
     color: #EBEBEB;
     margin: 0;
     padding: 1rem;
     font-weight: 300;
    }

    > div{
     color: #55EC20;
     display: flex;
     flex-direction: column;
     align-items: center;
     text-align: center;
     padding: 3rem 1rem;
    }

    .priceDisplay{
     box-sizing: border-box;
     margin-inline: auto;
     position: relative;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: min(70vw, 22rem);
     aspect-ratio: 1;
     padding: 1rem;
     border: solid 1px black;
     border-radius: 50%;
     box-shadow: 0 0 12px -2px rgba(173, 173, 173, 0.65) inset;

        &::after{
         content: "";
         width: 57vw;
         height: 57vw;
         border-radius: 50%;
         border: dashed 1px rgba(85, 236, 32, 0.5);
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         pointer-events: none;
        }

        &::before{
         content: "";
         width: 47vw;
         height: 47vw;
         border-radius: 50%;
         border: dashed 1px rgba(85, 236, 32, 0.7);
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         pointer-events: none;
        }

        > *{
         position: relative;
         z-index: 1;
        }

        .price{
         font-size: 2rem;
         font-weight: 600;
        }

        p{
         margin: 0;
         font-weight: 500;
        }
    }
`
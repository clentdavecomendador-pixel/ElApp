import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const OverviewStyled = styled.section`
 ${Reset}
 background-color: #27282B;
    h1{
     margin: 0;
     padding: 1rem;
     text-align: center;
     color: #EBEBEB;
     font-weight: 300;
    }

    .priceContainer{
     display: flex;
     justify-content: space-evenly;
        > div{
         box-sizing: border-box;
         position: relative;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         color: #55EC20;
         text-align: center;
         border: solid 1px black;
         border-radius: 50%;
         box-shadow: 0 0 12px -2px rgba(173, 173, 173, 0.65) inset;
         width: 32vw;
         height: 32vw;

            &::after{
             content: "";
             width: 80%;
             height: 80%;
             border: dashed 1px rgba(85, 236, 32, 0.7);
             border-radius: 50%;
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

            p{
             margin: 0;
             color: #EBEBEB;
            }

            p:last-child{
             font-size: 1rem;
            }
        }
    }

    .allPrice{
     color: #EBEBEB;
     padding: 1rem;
     gap: 1rem;
    }

    .priceRow{
     display: flex;
     justify-content: space-evenly;
     gap: 1rem;
     margin: 1rem;
     padding: 0.75rem 0;
     border-bottom: 1px solid rgba(235, 235, 235, 0.2);
     box-shadow: 0 0 12px -2px rgba(173, 173, 173, 0.4);
     border-radius: 12px;
    }
`
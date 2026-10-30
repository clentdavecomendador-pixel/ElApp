import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const HistoryStyled = styled.section`
 ${Reset}
 background-color: #27282B;
    h1{
     text-align: center;
     margin: 0;
     padding: 1rem;
     color: #EBEBEB;
     font-weight: 300;
    }

    .Calendar{
     position: relative;
     width: calc(100% - 4rem);
     margin: 1rem auto;

        input{
         box-sizing: border-box;
         width: 100%;
         padding: 0.75rem 3rem 0.75rem 1rem;
         color: #EBEBEB;
         background: #27282B;
         border: 1px solid rgba(235, 235, 235, 0.2);
         border-radius: 12px;
         box-shadow: 0 0 12px -2px rgba(173, 173, 173, 0.4);
         font: inherit;
        }

        input::-webkit-calendar-picker-indicator {
            display: none;
        }

        button{
         position: absolute;
         top: 50%;
         right: 0.75rem;
         display: flex;
         padding: 0;
         border: 0;
         background: transparent;
         transform: translateY(-50%);
         cursor: pointer;
        }

        svg{
         display: block;
        }
    }

    .priceContent{
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
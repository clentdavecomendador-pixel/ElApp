import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const HeaderStyeled = styled.header`
 ${Reset}
 display: grid;
 grid-template-rows: 1fr 1fr;
    .settingIcon{
     display: flex;
     justify-content: flex-end;
     background-color: #27282B;
     padding: 1rem;
        a{
         display: flex;
         align-items: center;
         svg{
         display: block;
         width: 1.5rem;
         height: 1.5rem;
         fill: currentColor;
         color: #55EC20;
        }
        }
    }
`;
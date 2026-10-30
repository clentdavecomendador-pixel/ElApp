import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const NavbarStyled = styled.nav`
 ${Reset}
 display: flex;
 padding: 0 1rem;
 justify-content: space-between;
 background-color: #201E1E;
    .logo{
     display: flex;
     align-items: center;
        svg{
         display: block;
         width: 47px;
         height: 47px;
        }
    }

    ul{
     ${Reset}
     display: flex;
     align-items: center;
     gap: 2rem;
     list-style: none;
        li{
            a{
             text-align: center;
             white-space: nowrap;
             text-decoration: none;
             color: #EBEBEB;
             &:hover,
             &.active{
              color: #55CE20;
             }
            }
        }
    }
`
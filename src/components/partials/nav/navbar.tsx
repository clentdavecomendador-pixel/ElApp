import { Logo } from "../../../assets/logo"
import { NavbarStyled } from "./navbar.styled"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return(
        <NavbarStyled>
          <div className="logo">
            {Logo}
          </div>

          <ul>
            <li><NavLink to="/overview">OVERSIGT</NavLink></li>
            <li><NavLink to="/">LIGE NU</NavLink></li>
            <li><NavLink to="/history">HISTORIK</NavLink></li>
          </ul>
        </NavbarStyled>
    )
}
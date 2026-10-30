import { HeaderStyeled } from "./header.styled"
import { Navbar } from "../nav/navbar"
import { SettingIcon } from "../../../assets/icons/setting"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <HeaderStyeled>
            <Navbar />
            <div className="settingIcon">
                <NavLink to="/setting">{SettingIcon}</NavLink>
            </div>
        </HeaderStyeled>
    )
}
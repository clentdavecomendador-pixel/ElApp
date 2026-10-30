import { FooterStyled } from "./footer.styled"

export const Footer = () => {
    return(
        <FooterStyled>
            <p>Priserne er <span>ex. moms</span> og afgifter</p>
            <p>Du vises lige nu priserne for <span>Øst Danmark</span></p>
        </FooterStyled>
    )
}
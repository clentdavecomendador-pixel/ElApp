import { SettingStyled } from "./setting.styled"

export const Setting = () => {
    return(
        <SettingStyled>
            <h1>INDSTILLINGER</h1>

            <section>
                <label htmlFor="moms">PRISER INKL. MOMS</label>
                <input type="text" id="moms" />

                <label htmlFor="alarm">LAVESTE PRIS ALARM</label>
                <input type="text" id="alarm" />
            </section>
        </SettingStyled>
    )
}
import { useEffect, useState } from "react"
import { LigeNuAPI, type APIRESPONSE } from "../../data/data"
import { useFetch } from "../../hooks/useFetch"
import { HomePageStyled } from "./homepage.styled"

export const HomePage = () => {
    // Keep track of the current time, so that we can find the matching price period.
    const [ now, setNow ] = useState(() => new Date())
    // This calls my hook with todays API URL.
    // The hook fetches the data and gives you result, loading state, and error.
    const { apiData, isLoading, error } = useFetch<APIRESPONSE>(LigeNuAPI(now))

    // Update the code every ½ hour.
    useEffect(() => {
        const update = window.setInterval(() => {
            setNow(new Date())
        }, 1_800_000)

        return () => window.clearInterval(update)
    }, [])

    // Find the price that matches with current time.
    const priceNow = apiData?.find((price) => {
        const start = new Date(price.time_start).getTime()
        const end = new Date(price.time_end).getTime()
        const current = now.getTime()

        return start <= current && current < end
    })

    const formatHour = (time: string) =>
        new Date(time).toLocaleString("da-DK", {
            hour: "2-digit",
            minute: "2-digit",
        })
    
    return(
        <HomePageStyled>
            <h1>ELPRISEN LIGE NU</h1>
            <div>
                <div className="priceDisplay">
                    {/* A message for when requesting is in progress */}
                    {isLoading && <p>Henter elpris...</p>}

                    {/* // A message to show for when the fetch failed */}
                    {error && <p>Kunne ikke hente elprisen: {error}</p>}

                    {/* // Shows the current price once the data us is done loading */}
                    {!isLoading && !error && priceNow && (
                        <>
                            <p className="price">{priceNow.DKK_per_kWh.toLocaleString("da-DK")} KR</p>
                            <p>PR KWH</p>
                        </>
                    )}
                </div>

                <div className="clockDisplay">
                    {/* // Shows the time range for the current price thats being display */}
                    {priceNow && (
                        <p>
                            {formatHour(priceNow.time_start)} - {formatHour(priceNow.time_end)}
                        </p>
                    )}
                </div>
            </div>
        </HomePageStyled>
    )
}
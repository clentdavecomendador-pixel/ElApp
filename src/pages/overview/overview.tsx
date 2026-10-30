import { OverviewStyled } from "./overview.styled"
import { useFetch } from "../../hooks/useFetch"
import { LigeNuAPI, type APIRESPONSE } from "../../data/data"

export const OverView = () => {
    // The current date are being called now
    const now = new Date()

    // This calls my hook with todays API URL
    // The hook fetches the data and gives you result, loading state, and error.
    const { apiData, isLoading, error} = useFetch<APIRESPONSE>(LigeNuAPI(now))

    // This show me what's inside apiData
    console.log(apiData)

    // This will show the lowest price.
    // If the current price is lower than the lowest it will show the lowest if not then ill show the current price.
    const lowPrice = apiData?.length
        ? apiData.reduce((lowest, current) =>
            current.DKK_per_kWh < lowest.DKK_per_kWh ? current : lowest
        )
        : null

    // This will show the highest price.
    // If the current price is higher than the highest it will show the highest price.
    const highPrice = apiData?.length
        ? apiData.reduce((highest, current) =>
            current.DKK_per_kWh > highest.DKK_per_kWh ? current : highest
        )
        : null

    return(
        <OverviewStyled>
            <h1>OVERSIGT</h1>
            <section>
                <div className="priceContainer">
                    <div>
                        <p>
                            {error
                                ? error
                                : isLoading
                                    ? "Loading..."
                                    : lowPrice
                                        ? `${lowPrice.DKK_per_kWh.toFixed(2)} KR`
                                        : "No price data"}
                        </p>
                        <p>PR. KWH</p>
                    </div>

                    <div>
                        <p>
                            {error
                                ? error
                                : isLoading
                                    ? "Loading..."
                                    : highPrice
                                        ? `${highPrice.DKK_per_kWh.toFixed(2)} KR`
                                        : "No price data"}
                        </p>
                        <p>PR. KWH</p>
                    </div>
                </div>

                <div className="allPrice">
                    {/* // Display an error message, a loading message, the price data for today, or a message if no price data is available. */}
                    {error
                        ? <p>{error}</p>
                        : isLoading
                            ? <p>Loading...</p>
                            : apiData?.length
                                ? apiData.map((price) => (
                                    <div className="priceRow" key={price.time_start}>
                                        <span>
                                            {new Date(price.time_start).toLocaleTimeString("da-DK", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                            {" - "}
                                            {new Date(price.time_end).toLocaleTimeString("da-DK", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </span>
                                        <span>
                                            {price.DKK_per_kWh.toFixed(3)}{" "}
                                            Kr
                                        </span>
                                    </div>
                                ))
                                : <p>No price data for today</p>}
                </div>
            </section>
        </OverviewStyled>
    )
}
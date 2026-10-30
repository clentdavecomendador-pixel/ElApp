import { useState } from "react"
import { HistoryStyled } from "./history.styled"
import { CalendarIcon } from "../../assets/icons/calendar"
import { useFetch } from "../../hooks/useFetch"
import { LigeNuAPI, type APIRESPONSE } from "../../data/data"

export const History = () => {
        // This saves the date input so the calendar icon can open it
        const [dateInput, setDateInput] = useState<HTMLInputElement | null>(null)
        // This saves the selected date and starts with todays date
        const [selectedDate, setSelectedDate] = useState(() => {
            const today = new Date()
            const year = today.getFullYear()
            const month = String(today.getMonth() + 1).padStart(2, "0")
            const day = String(today.getDate()).padStart(2, "0")
            return `${year}-${month}-${day}`
        })
        // This gets the year, month, and day for the selected date
        const [year, month, day] = selectedDate.split("-").map(Number)
        // This creates the API URL for the selected date
        const apiUrl = selectedDate
            ? LigeNuAPI(new Date(year, month - 1, day))
            : ""
        // This fetches the prices for the selected date
        const { apiData, isLoading, error} = useFetch<APIRESPONSE>(apiUrl)

        // This opens the date picker when the calendar icon is pressed
        const openDatePicker = () => {
            const input = dateInput
            if (!input) return

            if (typeof input.showPicker === "function") {
                input.showPicker()
            } else {
                input.focus()
                input.click()
            }
        }

    return(
        <HistoryStyled>
           <h1>Historik</h1>

           <section>
                <div className="Calendar">
                    <input
                        ref={setDateInput}
                        type="date"
                        value={selectedDate}
                        // This updates the selected date and loads its prices
                        onChange={(event) => setSelectedDate(event.target.value)}
                        aria-label="Choose a date"
                    />
                    <button type="button" onClick={openDatePicker}>
                        {CalendarIcon}
                    </button>
                </div>

                <div className="priceContent">
                    {/* This shows the selected date */}
                    <h3>ELPRISERNE D. {selectedDate || "Vælg en dato"}</h3>
                    {/* This displays an error, loading message, prices, or a message if there are no prices */}
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
                                : <p>No price data for this date</p>}
                </div>
           </section>
        </HistoryStyled>
    )
}
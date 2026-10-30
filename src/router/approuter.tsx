import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homepage/homepage"
import { OverView } from "../pages/overview/overview"
import { History } from "../pages/history/history"
import { Setting } from "../pages/setting/setting"

export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/overview" element={<OverView />} />
            <Route index element={<HomePage />} />
            <Route path="/history" element={<History />} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
    )
}
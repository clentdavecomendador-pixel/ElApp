import { API } from "./data.types";

export type APIRESPONSE = {
    DKK_per_kWh: number;
    EUR_per_kWh: number;
    EXR: number;
    time_start: string;
    time_end: string;
}[];

export const LigeNuAPI = (date: Date = new Date()) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${API}/api/v1/prices/${year}/${month}-${day}_DK1.json`;
};
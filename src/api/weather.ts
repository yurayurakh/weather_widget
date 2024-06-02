import { fetchApi } from "./index"

export const getForecastWeather = async (params: object) => {
    return await fetchApi("data/2.5/forecast", params)
}

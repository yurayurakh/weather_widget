import { fetchApi } from "./index"

export const getCities = async (params: { q: string; limit?: number }) => {
    return await fetchApi("geo/1.0/direct", params)
}

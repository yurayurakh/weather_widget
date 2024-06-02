const API_URL: string = import.meta.env.VITE_API_URL
const API_KEY: string = import.meta.env.VITE_API_KEY

const normilizedApiUrl = (url: string, params: object): string => {
    if (!params) return url
    const urlParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== "") {
            urlParams.append(key, value)
        }
    })

    return `${API_URL}${url}?${urlParams.toString()}&appid=${API_KEY}`
}

// handle eror response
export const fetchApi = async (
    url: string,
    params: object,
    options: object = {}
): Promise<any> => {
    try {
        const response = await fetch(normilizedApiUrl(url, params), options)
        const data = await response.json()
        return data
    } catch {
        console.log("error")
    }
}

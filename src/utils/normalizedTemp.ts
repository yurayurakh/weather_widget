export function normalizedTempToCelsius(temp: number): string {
    const temperature = Math.round(temp - 273.15)
    return temperature > 0 ? `+${temperature}` : `${temperature}`
}

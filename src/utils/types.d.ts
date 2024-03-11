export interface WeatherInfo {
    country?: string,
    city?: string,
    temp?: number,
    sunset?: number,
    pressure?: number
}

export interface Rootstate {
    weatherInfo: WeatherInfo,
    message: string
}

export interface ReduxAction {
    type: string,
    payload: any
}
import { AppDispatch } from "../configureStore/store";
import { api_key, base_url } from "../utils/constants";
import { WeatherInfo } from "../utils/types";

export const PUT_WEATHER = 'PUT_WEATHER';
export const PUT_MESSAGE = 'PUT_MESSAGE';

export const putWeather = (weatherInfo: WeatherInfo) => ({
    type: PUT_WEATHER,  // действие
    payload: weatherInfo    // данные
})

export const putMessage = (message: string) => ({
    type: PUT_MESSAGE,
    payload: message
})


export const getWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        const data = await response.json();
        dispatch(putWeather({
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        }));
        dispatch(putMessage('Enter correct city name'));
    }
}
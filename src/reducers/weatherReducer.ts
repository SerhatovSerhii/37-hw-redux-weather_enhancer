import { PUT_MESSAGE, PUT_WEATHER } from "../actions/weatherAction"
import { ReduxAction, Rootstate} from "../utils/types"

const initialState = {
    weatherInfo: {},
    message: 'Enter city name'
}

export const weatherReducer = (state: Rootstate = initialState, action: ReduxAction) => {
    switch (action.type) {
        case PUT_WEATHER:
            return {...state, weatherInfo: action.payload, message: ''}
        case PUT_MESSAGE:
            return {...state, message: action.payload, weatherInfo: {} }
        default:
            return state
    }
}
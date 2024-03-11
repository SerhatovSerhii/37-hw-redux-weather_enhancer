import React, { useState } from 'react';
import { getWeather } from '../actions/weatherAction';



const Form = () => {

    const [city, setCity] = useState('');

    
    const getCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getWeather(city);
        setCity('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={handleChange} type='text' />
            <button type='submit'>Get weather</button>
        </form>
    )
}

export default Form
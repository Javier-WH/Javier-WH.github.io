import { useEffect, useState } from "react";
import SelectLabels from "./elements/dropbox";
import getWeatherData from "./fecth";
import WeatherIcon from "./elements/icon";

import { ReactComponent as SunRise } from "./weatherSVG/sunRise.svg";
import { ReactComponent as SunSet } from "./weatherSVG/sunSet.svg";
import { ReactComponent as Wind} from "./weatherSVG/wind.svg";
import {ReactComponent as Press} from "./weatherSVG/atmosphere.svg";

import "./weather_app.css";


export default function WeatherApp() {

    const [selectedCity, setSelectedCity] = useState({});
    const [iconName, setIconName] = useState("");
    const [iconText, setIconText] = useState("");
    const [temp, setTemp] = useState("");
    const [cityName, setCityName] = useState("");
    const [datetime, setDatetime] = useState("");
    const [relativeHumidity, setRelativeHumidity] = useState("");
    const [sunRise, setSunRise] = useState("");
    const [sunSet, setSunSet] = useState("");
    const [windSpd, setWindSpd] = useState("");
    const [press, setPress] = useState("")

    useEffect(() => {

        if (Object.keys(selectedCity).length === 0) {
            setIconName("placeHolder");
            setTemp("");
            setIconText("");
            setCityName("");
            setDatetime("");
            setRelativeHumidity("");
            setSunRise("");
            setSunSet("");
            setWindSpd("")
            setPress("")
            return
        }

        async function doStuff() {
            let data = await getWeatherData(selectedCity);
            if (data.error) {
                alert("ha ocurrido un error al comunicarse con la api")
                return
            }


            let icon = data.weather.icon;
            let icoText = data.weather.description;

            let temperature = data.temp;
            let _cityName = data.city_name;
            let _datetime = data.datetime;
            let _rh = data.rh;
            let sunrise = data.sunrise;
            let sunset = data.sunset;
            let wind_spd = data.wind_spd;
            let _press = data.pres;


            setIconName(icon);
            setIconText(icoText);
            setTemp(`${temperature}°C`);
            setCityName( `City name: ${_cityName}`);
            setDatetime(`Date time: ${_datetime} UTC`);
            setRelativeHumidity(`Relative humidity: ${_rh}%`);
            setSunRise(`Sunrise: ${sunrise} UTC` );
            setSunSet(`Sunset: ${sunset} UTC`);
            setWindSpd(`Wind speed: ${wind_spd} m/s` )
            setPress( `Pressure: ${_press} mb`)
        }
        doStuff();

    }, [selectedCity])
    
 

    return <div>

        <div id="weather-main-container">

            <SelectLabels setSelectedCity={setSelectedCity} />

            <div id="weather-icon-main-container">
                <div id="weater-icon-container">
                    <WeatherIcon iconName={iconName} />
                    <span>{iconText}</span>
                </div>

                <div id="weather-icon-text-container">
                    <span id="temperature">{temp}</span>
                    <span className="weather-text">{cityName}</span>
                    <span className="weather-text">{datetime}</span>
                    <span className="weather-text">{relativeHumidity}</span>
                </div>
            </div>

        </div>
        <div id="weather-data-container">
            <span className="sun-icon"> {iconName !== "placeHolder" ? <SunRise /> : ""}  {sunRise}</span>
            <span className="sun-icon"> {iconName !== "placeHolder" ? <SunSet /> : ""}  {sunSet}</span>
            <span className="sun-icon"> {iconName !== "placeHolder" ? <Wind /> : ""}  {windSpd}</span>
            <span className="sun-icon"> {iconName !== "placeHolder" ? <Press /> : ""}  {press}</span>
        </div>
        <br />
        <a href=" https://www.weatherbit.io" id="courtesy"> {iconName !== "placeHolder" ? "Data courtesy of Weatherbit" : ""}</a>
        
    </div>
}
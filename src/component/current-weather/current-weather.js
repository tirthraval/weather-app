import "./current-weather.css";


const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <span>
                    <p className="city">{data.city}</p>
                    <p className="weather-decription">{data.weather[0].description}</p>
                </span>

                <img alt="weather" className="weather-icon" src= {`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C </p>
                <div className="detais">
                    <div className="parameter-row">
                        <span className="label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="label">Feels Like</span>
                        <span className="value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="label">Wind</span>
                        <span className="value">{data.wind.speed}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="label">Humidity</span>
                        <span className="value">{data.main.humidity}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="label">Presure</span>
                        <span className="value"> {data.main.pressure}</span>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default CurrentWeather;
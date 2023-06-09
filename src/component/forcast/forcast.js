import "./forcast.css";
import { Accordion } from "react-accessible-accordion";
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const Forcast = ({ data }) => {
    const WEEK_DAYS = ['Moday','Tuesday','Wednesday','Thursday','Friday', 'Saturday' ,'Sunday'];
    const dayInWeek = new Date().getDay();
    const forcastDays =WEEK_DAYS.slice(dayInWeek , WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInWeek))
    return (<>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.slice(0, 7).map((item, idx) => (
                <AccordionItem key ={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt ="weather" className="icon-small" src= {`icons/${item.weather[0].icon}.png`}/>
                                <label className="day">{forcastDays[idx]}</label>
                                <label className="weather-dec"> {item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-item">
                                <label>Presure</label>
                                <label>{item.main.pressure} hPa</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Humidity</label>
                                <label>{item.main.humidity} %</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Clouds</label>
                                <label>{item.clouds.all} % </label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Wind Speed:</label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Sea level:</label>
                                <label>{item.main.sea_level} m</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Feels Like:</label>
                                <label>{Math.round(item.main.feels_Like)}°C</label>
                            </div>

                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}


        </Accordion>
    </>);
}
export default Forcast;
import "./current.scss"
const WidgetCurrent = (props) => {
    return (
        <div className="current">
            <div className="current__left">
                <div className="current__temperature" id="currentTemperature">
                    -°C
                </div>
                <div className="current__next">
                    <div
                        className="current__next_weather"
                        id="widgetNextWeather"
                    >
                        -
                    </div>
                    <div
                        className="current__next_temperature"
                        id="widgetNextTemp"
                    >
                        -°C
                    </div>
                </div>
            </div>
            <div className="current__middle">
                <div className="current__weather" id="widgetWeather">
                    -
                </div>
                <div className="current__location" id="widgetLocation">
                    No selected location
                </div>
            </div>
            <div className="current__right">
                <div className="current__img" id="widgetWeatherIcon"></div>
            </div>
        </div>
    )
}

export default WidgetCurrent

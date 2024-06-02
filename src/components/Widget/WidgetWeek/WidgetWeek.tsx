import "./day.scss"

interface IDay {
    dayName: string
    weather: string
    temp: number
    tempNight: number
}

const WidgetWeek = (props) => {
    return (
        <div className="widget__week" id="weatherWeek">
            asd
        </div>
    )
}

const WidgetDay = ({ dayName, weather, temp, tempNight }: IDay) => {
    return (
        <div className="day">
            <div className="day__title">${dayName}</div>
            <div className="day__img">
                <img src={`src/img/${weather}.png`} alt="cloundly" />
            </div>
            <div className="day__weather">${weather}</div>
            <div className="day__tempareture">
                <div className="day__part">Day</div>
                <div className="day__value">${temp}°C</div>
                <div className="day__value">${tempNight}°C</div>
                <div className="day__part">Night</div>
            </div>
        </div>
    )
}

export default WidgetWeek

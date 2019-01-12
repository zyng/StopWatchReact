import React from 'react';

const TimeSaved = ({ time, number }) => {
    return (
        <li className="animated fadeIn"><i className="flaticon-stopwatch"></i><span className="stopwatch__saved-time--text">Pomiar {number}:</span>
            <span > {time}</span></li>
    )
}

export default TimeSaved;
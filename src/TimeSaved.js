import React, { Component } from 'react';

const TimeSaved = (props) => {
    return (
        <li className="animated  fadeIn"><i className="flaticon-stopwatch"></i><span className="saved-time__title">Pomiar  {props.number}:</span> <span className="saved-time__time">{props.time}</span></li>
    )
}

export default TimeSaved;
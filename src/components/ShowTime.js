import React from 'react';

const ShowTime = (props) => {
    return (
        <div className="stopwatch__actual-time-container">
            <div className="stopwatch__actual-time">{props.text}</div>
        </div>
    )
}

export default ShowTime;
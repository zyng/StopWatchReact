import React from 'react';

const ShowTime = (props) => {
    return (
        <div className="actual-time">
            <div className="actual-time__timer">{props.text}</div>
        </div>
    )
}

export default ShowTime;
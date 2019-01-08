import React from 'react';

const StoperMenu = (props) => {
    const style = props.isStopped ? "flaticon-play-button" : "flaticon-round-pause-button";
    return (
        <React.Fragment>
            <div className="stoper-menu">
                <button className="reset" onClick={props.resetClick}><i className="flaticon-refresh"></i></button>
                <button className="start" onClick={props.stoperClick}><i className={style}></i></button>
                <button className="save" onClick={props.saveClick}><i className="flaticon-stopwatch"></i></button>
            </div>

        </React.Fragment>
    )
}

export default StoperMenu;
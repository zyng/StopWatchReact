import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
&:before {
    color: ${props => props.color} !important;  
}
`;

const StoperMenu = ({ isStopped, resetClick, stoperClick, saveClick, isRun, color }) => {

    const changeIconClass = isStopped ? "flaticon-play-button" : "flaticon-round-pause-button";
    return (
        <React.Fragment>
            <div className="stopwatch__menu">
                <button className="stopwatch__button" onClick={resetClick} disabled={!isRun || !isStopped}><Icon color={color} className="flaticon-refresh" /></button>
                <button className="stopwatch__button" onClick={stoperClick}><Icon color={color} className={changeIconClass} /></button>
                <button className="stopwatch__button" onClick={saveClick} disabled={isStopped}><Icon color={color} className="flaticon-stopwatch" /> </button>
            </div>

        </React.Fragment>
    )
}

export default StoperMenu;
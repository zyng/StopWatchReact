import React from 'react';
// import styled from 'styled-components';

// const IconDisabled = styled.i`
//     &:before {
//         color: grey !important;  
//         opacity: .4; 
//     }
// `;

const StoperMenu = ({ isStopped, resetClick, stoperClick, saveClick, isRun }) => {
    const changeIconClass = isStopped ? "flaticon-play-button" : "flaticon-round-pause-button";
    return (
        <React.Fragment>
            <div className="stopwatch__menu">
                <button className="stopwatch__button" onClick={resetClick} disabled={!isRun || !isStopped}><i className="flaticon-refresh"></i></button>
                <button className="stopwatch__button" onClick={stoperClick}><i className={changeIconClass}></i></button>
                <button className="stopwatch__button" onClick={saveClick} disabled={isStopped}><i className="flaticon-stopwatch"></i> </button>
            </div>

        </React.Fragment>
    )
}

export default StoperMenu;
import React, { Component } from 'react';
import './css/animate.css';
import './style.css';
import './font/flaticon.css';
import TimeSaved from './TimeSaved';
import StoperMenu from './StoperMenu';
import ShowTime from './ShowTime';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class App extends Component {
  state = {
    startTime: 0,
    stopTime: 0,
    stoperTimeMiliSeconds: 0,
    stoperTimeSeconds: 0,
    stoperTimeMinutes: 0,
    timeDifference: 0,
    timeDifferenceResumeAndStop: 0,
    resumeTime: 0,
    stopped: true,
    measureTime: '',
    textTime: this.props.stopWatchStartText,
    textSavedTimes: [],
  }

  colorRGB = "rgba(62, 152, 199,1)"

  static defaultProps = {
    stopWatchStartText: "00:00:00",
  }

  handleStoper = () => {
    let isStopped = !this.state.stopped;
    this.setState({
      stopped: isStopped
    });

    let startTime;

    if (!this.state.startTime) {
      startTime = new Date().getTime();
      this.setState({
        startTime: startTime,
      });
    } else {
      startTime = this.state.startTime;
    }

    if (isStopped) {
      this.handleStopStoper(this.state.measureTime);
    } else {
      const resumeTime = new Date().getTime();
      const timeDifferenceResumeAndStop = (startTime === resumeTime) ? 0 : (resumeTime - this.state.stopTime);

      this.setState((prevState) => ({
        resumeTime: resumeTime,
        timeDifferenceResumeAndStop: timeDifferenceResumeAndStop,
        textStartBtn: "Pauza",
        timeDifference: prevState.timeDifference + timeDifferenceResumeAndStop,
        measureTime: setInterval(this.handleStartStoper, 10)
      }));
    }
  }
  handleStartStoper = () => {

    const newTime = new Date().getTime() - this.state.timeDifference;


    let stoperTimeMiliSeconds = Math.floor(((newTime - this.state.startTime) % 1000) / 10);
    stoperTimeMiliSeconds = stoperTimeMiliSeconds < 10 ? `0${stoperTimeMiliSeconds}` : stoperTimeMiliSeconds;

    let stoperTimeSeconds = Math.floor(((newTime - this.state.startTime) / (1000)) % 60);
    stoperTimeSeconds = stoperTimeSeconds < 10 ? `0${stoperTimeSeconds}` : stoperTimeSeconds;

    let stoperTimeMinutes = Math.floor(((newTime - this.state.startTime) / (1000 * 60)) % 60);
    stoperTimeMinutes = stoperTimeMinutes < 10 ? `0${stoperTimeMinutes}` : stoperTimeMinutes;

    const oldMinute = parseInt(this.state.stoperTimeMinutes);
    const currentMinute = parseInt(stoperTimeMinutes);
    console.log(oldMinute, currentMinute);
    if (currentMinute !== oldMinute) {
      const colorR = Math.floor(Math.random() * 256);
      const colorG = Math.floor(Math.random() * 256);
      const colorB = Math.floor(Math.random() * 256);

      this.colorRGB = `rgba(${colorR},${colorG},${colorB},1)`
    }
    this.setState({
      stoperTimeMiliSeconds: stoperTimeMiliSeconds,
      stoperTimeSeconds: stoperTimeSeconds,
      stoperTimeMinutes: stoperTimeMinutes,
      textTime: `${stoperTimeMinutes}:${stoperTimeSeconds}:${stoperTimeMiliSeconds}`
    });
  }

  handleStopStoper = (functionToStop) => {
    clearInterval(functionToStop);
    this.setState({
      stopTime: new Date().getTime()
    });
  }

  handleSaveTime = () => {
    const timeToSave = this.state.textTime;
    const textSavedTimes = this.state.textSavedTimes.slice();
    textSavedTimes.push(timeToSave);

    this.setState({
      textSavedTimes,
    });


    this.goDownWithList();
  }

  // ComponentWillUpdate = () => {
  //   this.goDownWithList();
  // }
  // ComponentDidMount = () => {
  //   this.goDownWithList();
  // }

  goDownWithList = () => {
    const savedTimesBox = document.getElementById('times');
    const savedTimeBoxHeight = savedTimesBox.scrollHeight;
    savedTimesBox.scrollTop = savedTimeBoxHeight;

  }

  handleReset = () => {
    this.handleStopStoper(this.state.measureTime);

    this.setState({
      startTime: 0,
      stopTime: 0,
      stoperTimeMiliSeconds: 0,
      stoperTimeSeconds: 0,
      stoperTimeMinutes: 0,
      timeDifference: 0,
      timeDifferenceResumeAndStop: 0,
      resumeTime: 0,
      stopped: true,
      measureTime: '',
      textTime: this.props.stopWatchStartText,
      textSavedTimes: [],
    });
  }


  render() {
    const savedTimesShow = this.state.textSavedTimes.map((time, index) => <TimeSaved key={index} number={index + 1} time={time} />)

    const percentage = this.state.stoperTimeSeconds * 1.67;

    return (
      <React.Fragment>

        <div className="stopwatch">

          .
          <div className="circle-progress">
            <CircularProgressbar percentage={percentage} styles={{
              path: { stroke: this.colorRGB }
            }} />
            <ShowTime text={this.state.textTime} />
          </div>



          <ul className="saved-time" id="times" >
            {savedTimesShow}
          </ul>

          <StoperMenu stoperClick={this.handleStoper}
            resetClick={this.handleReset}
            saveClick={this.handleSaveTime}
            text={this.state.textStartBtn}
            isStopped={this.state.stopped}
          />

        </div>

      </React.Fragment>
    );
  }
}

export default App;

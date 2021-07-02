// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  getMin = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`

    return `${stringifiedMinutes}`
  }

  getSec = () => {
    const {time} = this.state
    const seconds = Math.floor(time % 60)

    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedSeconds}`
  }

  timeIncrement = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  start = () => {
    this.intervalId = setInterval(this.timeIncrement, 1000)
  }

  stop = () => {
    clearInterval(this.intervalId)
  }

  reset = () => {
    this.setState({time: 0})
    clearInterval(this.intervalId)
  }

  render() {
    const timeView = `${this.getMin()}:${this.getSec()}`
    return (
      <div className="bg">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="timer">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="timer"
            />
            <p className="para">Timer</p>
          </div>

          <h1 testid="timer" className="time">
            {timeView}
          </h1>
          <div className="buttons">
            <button type="button" onClick={this.start} className="button1">
              Start
            </button>
            <button type="button" onClick={this.stop} className="button2">
              Stop
            </button>
            <button type="button" onClick={this.reset} className="button3">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch

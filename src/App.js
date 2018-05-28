import React, { Component } from 'react'
import './App.css'
import Timer from './components/Timer'
import Footer from './components/Footer'
import ReactHowler from 'react-howler'
class App extends Component {

  setTime = (event) => {
    event.preventDefault()
    this.setState({ time: parseInt(event.target.textContent, 10) })
  }

  setTheme = (event) => {
    event.preventDefault()
    this.setState({ theme: event.target.value })
  }

  constructor(props) {
    super (props)
    this.state = {
      currentTime: {
        seconds: 0,
        minutes: 0,
        hours: 0
      },
      presets: {
        one: 30,
        two: 180,
        three: 300
      },
      theme: '',
      playing: false
    }
  }

  handlePlay = () => {
    this.setState ({
      playing: true
    })
  }

  render() {
    return (
      <div className="App">
        <Timer
          seconds = {this.state.currentTime.seconds}
          minutes = {this.state.currentTime.minutes}
          hours = {this.state.currentTime.hours}
          preset1 = {this.state.presets.one}
          preset2 = {this.state.presets.two}
          preset3 = {this.state.presets.three}
          changeTime={this.setTime}
          changeTheme={this.setTheme} />
          <ReactHowler
        src='./components/sounds/seagulls.wav'
        playing={this.state.playing}
      />
      <button onClick={this.handlePlay}>Play</button>
        <Footer />
      </div>
    )
  }
}

export default App

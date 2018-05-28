import React, { Component } from 'react'
import './App.css'
import Timer from './components/Timer'
import Footer from './components/Footer'

class App extends Component {

  constructor(props) {
    super (props)
    this.state = {
      theme: '',
      time: 0
    }
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div className="App">
        <Timer />
        <Footer />
      </div>
    )
  }
}

export default App

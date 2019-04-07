import React, { Component } from 'react'
import './App.css'
import DateRange from './components/DateRange'

class App extends Component {
  render() {
    let date = new Date()
    return (
      <div className="App">
        <DateRange date={date} />
      </div>
    )
  }
}

export default App

import React from 'react'

import Form from './Form'

class DateRange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateTime: null,
      date: null
    }
    this.emulateAPIRequest({ updateTime: new Date(), date: props.date })
  }

  onChange = value => {
    let newValue = value
    if (this.state.date !== new Date(newValue)) {
      this.setState(prevState => {
        return { ...prevState, date: newValue !== '' ? new Date(newValue) : '' }
      })
    }

    this.emulateAPIRequest({ updateTime: new Date() })
  }

  emulateAPIRequest(updatedData) {
    setTimeout(() => {
      this.setState(state => {
        return { ...state, ...updatedData }
      })
    }, 2000)
  }

  createPeriod(date) {
    let start = date
    let end = new Date(new Date(start).setFullYear(start.getFullYear() + 1))
    return { start, end }
  }

  render() {
    return (
      <div>
        <Form
          period={this.createPeriod(this.props.date)}
          updateTime={this.state.updateTime}
          onChange={this.onChange}
          date={this.state.date}
        />
      </div>
    )
  }
}

export default DateRange

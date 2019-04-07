import React from 'react'
import Spinner from '../../Spinner'
import RangeItems from '../RangeItems'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.setDateInputRef = element => (this.dateInputRef = element)
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="date"
            ref={this.setDateInputRef}
            onChange={event => this.props.onChange(event.target.value)}
            value={this.props.date && this.props.date !== '' ? this.props.date.toISOString().substr(0, 10) : ''}
            onFocus={() => (this.dateInputRef.style.backgroundColor = '#900')}
            onBlur={() => (this.dateInputRef.style.backgroundColor = '#fff')}
          />
        </div>
        <div>
          {!this.props.updateTime ? (
            <Spinner />
          ) : (
            `Последнее изменение: ${
              this.props.updateTime.getDate() + '.' + this.props.updateTime.getMonth() > 9
                ? '0' + this.props.updateTime.getMonth()
                : this.props.updateTime.getMonth()
            }`
          )}
        </div>
        <RangeItems period={this.props.period} />
      </div>
    )
  }
}

export default Form

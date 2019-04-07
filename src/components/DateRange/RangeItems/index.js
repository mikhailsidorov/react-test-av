import React from 'react'

const RangeItems = props => {
  let dates = []

  for (let i = +props.period.start; i < +props.period.end; i += 3600000 * 168) {
    dates.push(i)
  }
  let periods = []
  for (let i = 0; i < dates.length; i++) {
    let date = new Date(dates[i])

    if (date.getDay() === 1) {
      periods[i] = `${new Date(date.getTime()).toLocaleDateString()}-${new Date(
        date.setHours(168)
      ).toLocaleDateString()}`
    } else if (date.getDay() === 2) {
      periods[i] = `${new Date(date.setHours(-24)).toLocaleDateString()}-${new Date(
        date.setHours(144)
      ).toLocaleDateString()}`
    } else if (date.getDay() === 3) {
      periods[i] = `${new Date(date.setHours(-48)).toLocaleDateString()}-${new Date(
        date.setHours(120)
      ).toLocaleDateString()}`
    } else if (date.getDay() === 4)
      periods[i] = `${new Date(date.setHours(-48)).toLocaleDateString()}-${new Date(
        date.setHours(120)
      ).toLocaleDateString()}`
    else if (date.getDay() === 5)
      periods[i] = `${new Date(date.setHours(-72)).toLocaleDateString()}-${new Date(
        date.setHours(96)
      ).toLocaleDateString()}`
    else if (date.getDay() === 6)
      periods[i] = `${new Date(date.setHours(-96)).toLocaleDateString()}-${new Date(
        date.setHours(72)
      ).toLocaleDateString()}`
    else if (date.getDay() === 0)
      periods[i] = `${new Date(date.setHours(-120)).toLocaleDateString()}-${new Date(
        date.setHours(48)
      ).toLocaleDateString()}`

    // Magic
    // var n = periods.length,
    //   a = periods.length
    // let b = false
    // do {
    //   a /= 1.3
    //   if (a === 9 || a === 10) a = 11
    //   if (a < 1) a = 1

    //   for (let i = 0; i < n - a; ++i) {
    //     if (periods[i] > periods[i + a]) {
    //       b = true
    //       var t = periods[i + a]
    //       periods[i + a] = periods[i]
    //       periods[i] = t
    //     }
    //   }
    // } while (a > 1 || b)
    // }

    return (
      <div>
        {periods.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    )
  }
}

export default RangeItems

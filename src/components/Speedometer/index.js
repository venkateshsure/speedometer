// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  acc = () => {
    this.setState(previousState => {
      if (previousState.speed > 190) {
        return {speed: previousState.speed}
      }
      return {speed: previousState.speed + 10}
    })
  }

  bre = () => {
    this.setState(previousState => {
      if (previousState.speed === 0) {
        return {speed: 0}
      }
      return {speed: previousState.speed - 10}
    })
  }

  render() {
    const {speed} = this.state
    console.log(speed)
    return (
      <div className="container">
        <div className="inner-con">
          <h1 className="head">Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="img-con"
          />
          <h1 className="para-1">Speed is {speed}mph</h1>
          <p className="para-2">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="but-con">
            <button onClick={this.acc} type="button" className="but1">
              Accelerate
            </button>
            <button onClick={this.bre} type="button" className="but2">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer

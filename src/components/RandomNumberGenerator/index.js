import {Component} from 'react'
import './index.css'

class RandomNumberGeneration extends Component {
  render() {
    return (
      <div className="bg-image">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a Random Number in the range of 0 to 100
          </p>
          <div className="box">
            <button type="button" className="generate-btn">
              Generate
            </button>
          </div>
          <p className="count">0</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGeneration

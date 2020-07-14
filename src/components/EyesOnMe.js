import React, {Component} from 'react'

export default class EyesOnMe extends Component{

  handleOnFocus = () => {
    console.log("Good!")
  }

  handleOnBlur = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
    <button onBlur={this.handleOnBlur} onFocus={this.handleOnFocus}>Focus</button>
    )
  }
}
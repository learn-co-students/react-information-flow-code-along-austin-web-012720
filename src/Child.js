import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div onClick={this.props.handleColorChange}
        className="child"
        style={{backgroundColor: "#FFF"}}
      ></div>
    )
  }
}

export default Child

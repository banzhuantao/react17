import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

  static propsTypes = {
    handleInput: PropTypes.func.isRequired
  }

  handleOnKeyUp = (eve) => {
    if (eve.keyCode !== 13 || !eve.target.value.trim()) return

    this.props.handleInput({
      id: new Date().getTime(),
      name: eve.target.value,
      done: false
    })
    eve.target.value = null
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={ this.handleOnKeyUp } />
      </div>
    )
  }
}

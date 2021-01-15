import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // state = {
  //   doneCoute: 0,
  //   unDoneCount: 0
  // }

  render() {
    const doneCoute = this.props.todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0)
    }, 0)

    const unDoneCount = this.props.todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成{doneCoute}</span> / 全部{unDoneCount}
      </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}

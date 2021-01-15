import React, { Component } from 'react'
import Item from './../Item'
import './index.css'

export default class List extends Component {
  handleCheck = (id, done) => {
    this.props.handleCheck(id, done)
  }

  deleteTodo = (id) => {
    this.props.deleteTodo(id)
  }

  render() {
    const { todos } = this.props

    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return <Item key={item.id} {...item} handleCheck={this.handleCheck} deleteTodo={ this.deleteTodo } />
          })
        }
      </ul>
    )
  }
}

import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouseState: false
  }

  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouseState: flag
      })
    }
  }

  handleCheck = (id) => {
    return (eve) => {
      this.props.handleCheck(id, eve.target.checked)
    }
  }

  handleDelete = (id) => {
    return () => {
      // console.log({id});
      this.props.deleteTodo(id)
    }
  }

  render() {
    const propsData = this.props

    return (
      <li onMouseEnter={ this.handleMouse(true) } onMouseLeave={ this.handleMouse(false) } style={{ background: this.state.mouseState ? '#ddd' : 'white' }}>
        <label>
          <input type="checkbox" defaultChecked={ propsData.done } onChange={ this.handleCheck(propsData.id) } />
          <span>{ propsData.name }</span>
        </label>
        <button className="btn btn-danger" style={{ display: this.state.mouseState ? 'block' : 'none' }} onClick={ this.handleDelete(propsData.id) }>删除</button>
      </li>
    )
  }
}

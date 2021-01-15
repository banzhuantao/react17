import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      todos: [
        { id: '001', name: '吃饭', done: true },
        { id: '002', name: '睡觉', done: true },
        { id: '003', name: '打代码', done: false },
      ]
    }
  }

  handleInput = (data) => {
    console.log('App >>>', data);
    this.setState({
      todos: [ data, ...this.state.todos ]
    })
  }

  handleCheck = (id, done) => {
    const { todos } = this.state
    todos.map(item => {
      if (id === item.id) {
        item.done = done
      }
    })
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(value => {
      return value.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  render () {

    const { todos } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header handleInput = { this.handleInput } />

          <List todos={ todos } handleCheck={ this.handleCheck } deleteTodo={ this.deleteTodo } />
          
          <Footer todos={ todos } />
        </div>
      </div>
    );
  }
}

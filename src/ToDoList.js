import React, { Component } from 'react'
import './index.css';

class ToDoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div className="toDoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Task"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
              />
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-primary">Add Task</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ToDoList

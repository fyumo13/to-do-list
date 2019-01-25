import React, { Component } from 'react'
import './index.css';

class ToDoItems extends Component {
  createTasks = item => {
    return (
      <li
        className="list-group-item"
        key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    );
  }

  render() {
    const toDoEntries = this.props.entries;
    const listItems = toDoEntries.map(this.createTasks);
    return <ul className="list-group">{listItems}</ul>
  }
}

export default ToDoItems

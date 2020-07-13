import React, { Component } from "react";
import "./todo.css";

class TodoItem extends Component {
  onMarkItemDone = event => {
    this.props.markDone(this.props.id);
  };

  onDeleteItem = event => {
    this.props.deleteItem(this.props.id);
  };
  render() {
    const itemClass = this.props.status ? "done" : "undone";
    return (
      <div className="item">
        <p className={itemClass}> {this.props.todo} </p>
        <div>
          <button className="done-button" onClick={this.onMarkItemDone}>
            Done
          </button>
          <button className="delete-button" onClick={this.onDeleteItem}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;

import React, { Component } from "react";
import TodoItem from "./component/TodoItem";
import "./styles.css";

export default class App extends Component {
  state = {
    todoList: [],
    value: ""
  };

  handleInput = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleToDoList = event => {
    event.preventDefault();
    if (this.state.value === "") return;
    const newItem = {
      todo: this.state.value,
      id: Date.now(),
      status: false
    };

    this.setState(prevState => ({
      todoList: prevState.todoList.concat(newItem),
      value: ""
    }));
  };

  handleDoneClick = itemId => {
    const updatedItems = this.state.todoList.map(item => {
      if (itemId === item.id) item.status = !item.status;
      return item;
    });

    this.setState({
      items: [...updatedItems]
    });
  };

  handleDeleteItem = itemId => {
    const updatedItems = this.state.todoList.filter(item => {
      return item.id !== itemId;
    });

    this.setState({
      todoList: [...updatedItems]
    });
  };
  s;

  render() {
    return (
      <div className="App">
        <input
          className="input-el"
          refs="toDo"
          type="text"
          placeholder="Enter to do task"
          onChange={this.handleInput}
          value={this.state.value}
        />
        <button
          type="primary"
          className="add-button "
          onClick={this.handleToDoList}
        >
          Add to List
        </button>
        <div>
          {this.state.todoList.map(obj => {
            return (
              <TodoItem
                key={obj.id}
                todo={obj.todo}
                status={obj.status}
                id={obj.id}
                deleteItem={this.handleDeleteItem}
                markDone={this.handleDoneClick}
              />
            );
          })}
        </div>
        <div />
      </div>
    );
  }
}

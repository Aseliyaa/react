import "./App.css";
import React from "react";
import Todo from "./Todo.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      todos: [],
    };
  }
  render() {
    const { todos, name } = this.state;
    const allDone = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;
    const undoneCount = todos.filter((todo) => !todo.done).length;
    return (
      <div className="container">
        <h1>To do...</h1>
        <div className="info">
          <div>All: {allDone}</div>
          <div>Done: {doneCount}</div>
          <div>Left: {undoneCount}</div>
        </div>
        <div className="save">
          <input
            value={name}
            id="add"
            placeholder="I want to..."
            onChange={this.handleSetName}
          />
          <button id="add-btn" onClick={this.handleAddTodo}>
            Add
          </button>
        </div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              name={todo.name}
              done={todo.done}
              todoindex={index}
              onDone={this.handleSetDone}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
  handleSetName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleAddTodo = () => {
    const todo = {
      name: this.state.name,
      done: false,
    };
    const todoNames = this.state.todos.map((todo) => todo.name);
    if (todo.name !== "" && !todoNames.includes(todo.name)) {
      this.setState({
        name: "",
        todos: this.state.todos.concat([todo]),
      });
    }
  };

  handleSetDone = (done, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name ? { name, done } : todo
      ),
    });
  };

  handleDelete = (name) => {
    this.setState({
      name: this.state.name,
      todos: this.state.todos.filter((todo) => todo.name !== name),
    });
  };
}
export default App;

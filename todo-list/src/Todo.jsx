import React from "react";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    const { done, name } = this.props;
    return (
      <div
        className={done ? "done" : "unDone"}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <input type="checkbox" ckecked={done} onChange={this.handleCheck} />
        <span>{name}</span>
        <button
          className="delete-btn"
          ref={this.myRef}
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </div>
    );
  }
  handleCheck = (e) => {
    const done = e.target.checked;
    this.props.onDone(done, this.props.name);
  };
  handleMouseEnter = () => {
    this.myRef.current.classList.toggle("active");
  };
  handleMouseLeave = () => {
    this.myRef.current.classList.toggle("active");
  };
  handleDelete = () => {
    this.props.onDelete(this.props.name);
  };
}

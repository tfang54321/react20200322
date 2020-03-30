import React, { Component } from "react";
import { throwStatement } from "@babel/types";
import PropTypes from "prop-types";
import About from "./pages/About";
import Layers from "./layers";
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todoItem.complete ? "line-through" : "none"
    };
  };

  getStyle1 = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todoItem.complete ? "line-through" : "none"
    };
  };

  getStyle2 = () => {
    return {
      background: "#FF4500",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todoItem.complete ? "line-through" : "none"
    };
  };

  render() {
    const { id, title, layerstodos } = this.props.todoItem;
    const layerslength = layerstodos.length;

    return (
      <div style={this.getStyle()}>
        <button
          type="button"
          style={layerslength > 0 ? this.getStyle1() : this.getStyle2()}
          onClick={this.props.markComplete.bind(this, id)}
        ></button>
        {""}
        {title}

        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
          x
        </button>
        {layerslength > 0 ? <Layers layers={layerstodos} /> : ""}
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

const btnStyle2 = {
  background: "#ff0000",
  color: "#FF4500",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};
export default TodoItem;

import React, { Component } from "react";
import LayerItem from "./LayerItem";
import uuid from "react-uuid";

export default class layers extends Component {
  state = {
    sitetodos: [
      {
        siteid: uuid(),
        sitelocation: "100 kent"
      },
      {
        siteid: uuid(),
        sitelocation: "200 kent"
      },
      {
        siteid: uuid(),
        sitelocation: "300 somerset"
      }
    ]
  };

  markComplete = layerid => {
    this.setState({
      todos: this.props.layers.map(layer_temp => {
        if (layer_temp.layerid === layerid) {
          if (layer_temp.sitetodos.length > 0) {
            layer_temp.sitetodos = this.state.sitetodos;
            layer_temp.sitetodos = "";
          } else {
            layer_temp.sitetodos = this.state.sitetodos;
          }
        }
        return layer_temp;
      })
    });
  };

  render() {
    return this.props.layers.map(layItem_temp => (
      <LayerItem
        key={layItem_temp.layerid}
        layItem={layItem_temp}
        markComplete={this.markComplete}
      />
    ));
  }
}

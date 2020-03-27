import React, { Component } from 'react';
import LayerItem from './LayerItem';

export default class layers extends Component {

 
    render() {
      console.log("here is layers");
        return  this.props.todoLayers.map((todo) => (
            <LayerItem  key={todo.layerid} todo={todo}   />
             
             ));
    }
}

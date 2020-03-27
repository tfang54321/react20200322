import React, { Component } from 'react'

export default class LayerItem extends Component {
    render() {
 
        const {layerid,layertitle} = this.props.todo;

        return (
           <div>
               {layertitle}
           </div>
        )
    }
}

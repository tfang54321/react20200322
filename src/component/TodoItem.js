import React, { Component } from 'react'
import { throwStatement } from '@babel/types';
import PropTypes from 'prop-types';



export class TodoItem extends Component {

    getStyle= () =>{
        return  {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo.complete? 'line-through':'none'
                  
        }
    }

  

   


    // markComplete = (e)=>{
    //     console.log(this.props)
    // }
    render() {
        const {id,title,layerTodos} = this.props.todo;
        // const {layerid,layertitle} = this.props.layerTodo;
        console.log(layerTodos);
     
        return (
            <div style={this.getStyle()}>
            <p>
            <input type ="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
               {title}
          
               <button style={btnStyle} onClick = {this.props.delTodo.bind(this,id)}>x</button>
               {/* <button style={btnStyle} onClick = {this.props.layerTodo.bind(this,layerid)}>x</button> */}
              
               </p>
         
            </div>
        )
    }

 
}




TodoItem.propTypes = {
    todo: PropTypes.object.isRequired

   }

   const btnStyle = {
       background : '#ff0000',
       color:  '#fff',
       border: 'none',
       padding: '5px 10px',
       borderRadius: '50%',
       cursor: 'pointer',
       float: 'right'
   }
export default TodoItem

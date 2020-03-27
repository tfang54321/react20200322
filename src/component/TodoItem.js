import React, { Component } from 'react'
import { throwStatement } from '@babel/types';
import PropTypes from 'prop-types';
import About from './pages/About';
import Layers from './layers';



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
        const {id,title,layerstodos} = this.props.todo;
        const layerslength = layerstodos.length;
        
        // const {layerid,layertitle} = this.props.layerTodo;
        console.log(layerstodos.length);
        console.log('from todoIem');
     
     
        return (

            //<layers  todoLayers={layerstodos} />
            <div style={this.getStyle()}>
            <p>
            <input type ="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
               {title}
          
               <button style={btnStyle} onClick = {this.props.delTodo.bind(this,id)}>x</button>
 {layerslength>0 ?<Layers  todoLayers={layerstodos} /> :''}

               </p>
         
            </div>

    
        );
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

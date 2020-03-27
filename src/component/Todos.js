 import React ,{Component} from 'react';
import { toIdentifier } from '@babel/types';
import TodoItem from './TodoItem';
import uuid from 'react-uuid';

import layers from './layers';

class Todos extends React.Component{


  render(){
      console.log(this.props.todos);
  
      return(
          <u1>
        //     {/* {this.renderListGroup()} */}
           {this.renderListItems()}
          </u1>
      );
     
  }


  layerTodo = (layerid)=>{

    console.log("hello layers");
  }

  renderListItems() {
    return  this.props.todos.map((todo) => (
   <TodoItem  key={todo.id} todo={todo}  markComplete={this.props.markComplete }  delTodo = {this.props.delTodo} />
      //  <li key={1}><a href="#">{todo.title}</a></li>
      // <li key={2}><a href="#">{todo.title}</a></li>
    ));
    
    }

  }


   


export default Todos;
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Todos from './component/Todos';
import Header from './component/Header';
import AddTodo from './component/AddTodo';
import uuid from 'react-uuid';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from './component/pages/About';


class App extends React.Component {


 

  state = {
   

    sitetodos:[
       {
         siteid: uuid(),
       sitelocation:'100 kent'
       },
       {
        siteid: uuid(),
         sitelocation: '200 kent'

       },
       {

        siteid: uuid(),
        sitelocation: '300 somerset'

       }



    ],



    layertodos: [
      {
        layerid: uuid(),
        layertitle: 'g1 titlea1 _for_Take out the trush',
        sitetodos:''
      },
      {
        layerid: uuid(),
        layertitle: 'g1 titlea2_for_Take out the trush',
        sitetodos:''
      },
      {
        layerid: uuid(),
        layertitle: 'g1 titlea3_for_Take out the trush',
        sitetodos:''
      }

    ],
    // layertodos_2: [
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea1 _for_Take out the trush'
    //   },
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea2_for_Take out the trush'

    //   },
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea3_for_Take out the trush'

    //   }

    // ],
    // layertodos_3: [
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea1 _for_Take out the trush'
    //   },
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea2_for_Take out the trush'

    //   },
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea3_for_Take out the trush'

    //   }

    // ],
    // layertodos_4: [
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea1 _for_Take out the trush'
    //   },
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea2_for_Take out the trush'

    //   },
    //   {
    //     layerid: uuid(),
    //     layertitle: 'g1 titlea3_for_Take out the trush'

    //   }

    // ],
    todos: [
      {
        id: uuid(),
        title: 'Tke out the trush',
        complete: true,
        layerstodos:''

            
        
      },
      {
        id: uuid(),
        title: ' meet with boss',
        complete: false,
        layerstodos:''

     
      },
      {
        id: uuid(),
        title: 'Dinner with someone',
        complete: false,
        layerstodos:''
        
      }
    ]

  }


  markComplete = (id) => {
    this.setState(
      {
       
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
         if(todo.layerstodos.length > 0){
            todo.layerstodos = this.state.layertodos;
           todo.layerstodos = '';
         }else{
         todo.layerstodos = this.state.layertodos;
         }
        }
        return todo;

      })
    })
    // console.log(id)
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }


  addTodo = (title) =>{
    const newTodo = {
      id: uuid(),
      title,
      complete: false
    }
    // console.log(title);

    this.setState({
      todos: [...this.state.todos,newTodo]

    })
  }




  render() {
    return (
      <Router>
      <div className="App">
      <div className='container'>

          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
          <Header />
          <Route exact path="/" render={props =>(
            <React.Fragment>
                 <AddTodo  addTodo={this.addTodo}/>
                 <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              
            </React.Fragment>
          )}/>
       <Route path="/about"  component={About}/>
        </div>
     </div>

     </Router>
    )
  }

}
export default App;


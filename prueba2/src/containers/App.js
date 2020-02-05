import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import Tasks from "../services/users";

import UserForm from "../components/UserForm";

class App extends React.Component{

  state = {


    tasks: [{


    }]
  }


  async componentDidMount() {
    const tasks = await Tasks.getUsers();
    this.setState((initialState) => {
      return {
        tasks: [
          ...initialState.tasks,
          ...tasks
        ]
      }
    })
  }





  render(){

    const { tasks} = this.state;
    return (

        <div>
          <h1>Lista de usuarios:</h1>

          <UserForm buttonText="Ver lista" buttonTextAdd="Agregar tarea"/>



        </div>
    );
  }
}

export default App;

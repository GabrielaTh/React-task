import React, {Component} from 'react';
import logo from './nanotechnology.png';
import './App.css';

//Data
import {task} from './task.json';
//subcompenents
import FormTask from './components/FormTask';

class App extends Component {
  constructor() {
    super();
    this.state = {
      task
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  removeTask(index) {
    this.setState({
      task: this.state.task.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTask(task) {
    this.setState({
      task: [...this.state.task, task]
    })
  }

  render() {
    const task = this.state.task.map((task, i) => {
      return ( 
      <div className = "col-md-4" key = {i}>
        <div className = "card border-info text-center m-1">
          <div className = "card-header bg-transparent border-info">
            <h5> {task.Date} </h5> 
          </div> 
          <div className = "card-body">
            <p>{task.Description}</p> <p> {task.Autor}</p> 
              <button className = "btn btn-outline-danger" onClick = {this.removeTask.bind(this, i)}>
               Delete 
              </button>  
          </div>
        </div> 
      </div>
      )
    });

    // Return the component
    return ( 
    <div className = "App">
      <nav className = "navbar navbar-dark bg-info">
          <a href = "#" className = "nav-link text-white " href = "/">
             Task
            <span className = "badge badge-pill badge-light ml-2" > {this.state.task.length } </span> 
          </a> 
      </nav> 
      <div className = "container">
        <div className = "row mt-4">
          <div className = "col-md-4 text-center">
            <img src = {logo} className = "App-logo" alt = "logo"/>
            <FormTask onAddTask = {this.handleAddTask}></FormTask> 
          </div> 
          <div className = "col-md-8">
            <div className = "row" >{task}</div> 
          </div> 
        </div> 
      </div> 
    </div>
    );
  }
}

export default App;
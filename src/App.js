import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from './components/Users'


class App extends Component {
 state = {
    users: [
      {
        id: 1,
        name: "BabaYqb",
        surname: "Uzun Qulaq",
        salary: 599,
      },
      {
        id: 2,
        name: "Murad",
        surname: "Ismayilli",
        salary: 343,
      },
      {
        id: 3,
        name: "Aytac",
        surname: "Sukurzade",
        salary: 245,
      },
      {
        id: 4,
        name: "Ayten",
        surname: "NurMemmedov",
        salary: 456,
      },
    ],
 }
  deleteUser = (id) => {
    this.setState({
      Users:this.state.users.filter(user => id !== user.id )
    })
  }
  render(){
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1>{<Navbar title="App"></Navbar>}</h1>
            <h3>
              <Users deleteUser={this.deleteUser} users={ this.state.users }></Users>
           </h3>
           
          </div>
        </div>
      </div>
    </div>
  );
 }
}

export default App;

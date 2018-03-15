import React, { Component } from 'react';
import User from "./User";
class Users extends Component {
  state = {
    users: [
      { age: 12, height: 222 },

      { height: "kwadwo", age: 120 },

      { height: "boateng", age: 1200 }

            ],
    title: "USER LIST"

  }






  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <User age ={this.state.users[0].age} >{this.state.users[0].height}</User>
        <User age ={this.state.users[1].age} >{this.state.users[1].height}</User>
        <User age ={this.state.users[2].age} >{this.state.users[2].height}</User>
      </div>

    );
  }
}

export default Users;
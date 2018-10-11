import React, { Component } from 'react';

import UserTemplate from './user_template';

class User extends Component {

  state = {
    name: "Dasha",
    lastname: 'Jones',
    age: 25,
    hobbies: ['run', 'jump', 'cooking'],
    spanish: false,
    message() {console.log('hey')},
    car: {brand: 'Ford', model: 'Focus'},
    mother: 'Martha',
    color: 'red'
  }
  
  changeColor = () => {
    this.refs.myColor.style.color = 'blue';
  }

  render() {

    const style = {
      color: this.state.color
    }

    return (
      <div>
        <h4 ref="myColor" style={style}>{this.state.mother}</h4>
        <div onClick={()=>this.changeColor()}>Change Color</div>
        <UserTemplate {...this.state}/>
      </div>
    );
  }
}

export default User;
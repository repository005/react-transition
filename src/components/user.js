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
    mother: 'Jane'
  }

  render() {
    return (
      <div>
        <UserTemplate {...this.state}/>
      </div>
    );
  }
}

export default User;
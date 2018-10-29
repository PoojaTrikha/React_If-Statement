import React, { Component } from 'react';

class  Person extends Component {
    render() {
      return (
         <div>
         <p>My name is {this.props.userName} and my age is {this.props.userAge}</p>
        
         </div>
      );
    }
  }
  
  export default Person;
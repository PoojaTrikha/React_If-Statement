import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Person: [
      { name: "Pooja", age: "35" },
      { name: "Sushim", age: "65" },
      { name: "Prachi", age: "48" },
      { name: "Neeta", age: "55" }
    ],
    showPerson: false
  }
  
  togglePersonHandler =()=>{
   const doesShow = this.state.showPerson;
   this.setState({showPerson: !doesShow});
  }

  nameHandler = (event) =>{
    this.setState({
      Person: [
        { name: event.target.value, age: "35" },
        { name: "Sushim", age: "65" },
        { name: "Prachi", age: "48" },
        { name: "Geeta", age: "55" }
      ],
      
    })
  }
   
  render() {
    return (
      <div className="App">
      <button
      onClick={this.togglePersonHandler}>Toggle names</button>
      {
      this.state.showPerson ===true ?
      <div>
      <Person changed ={this.nameHandler} userName ={this.state.Person[1].name} userAge ={this.state.Person[1].age}/>
      <Person changed ={this.nameHandler} userName ={this.state.Person[2].name} userAge ={this.state.Person[2].age}/>
      <Person changed ={this.nameHandler} userName ={this.state.Person[3].name} userAge ={this.state.Person[3].age}/>
      </div> : null
      }
      </div>
      
    );
  }
}

export default App;

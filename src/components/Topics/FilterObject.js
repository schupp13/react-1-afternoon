import React, {Component} from 'react';

class FilterObject extends Component{

  constructor(){
    super();
    this.state = {
      userInput : "",
      filteredArray :[],
      unFilteredArray : [
        {
          name: 'Philip',
          age: 30,
          job: 'Programmer',
          car: 'mustang'
        },
        {
          name: 'Erika',
          age: 25,
          job: 'Customer Service',
          robot: 'blue'
        },
        {
          name: 'Ryan',
          age: 30,
          job: 'Financail Advisor',
          status: 'married'
        },
        {
          name: 'Peter',
          age: 20,
          job: 'Superhero'
        }]
    }
    this.other = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

handleChange(e) {
  this.setState({userInput: e.target.value});
}

handleClick(){
 
  let filterArray = this.state.unFilteredArray.filter(person => {
    for(let prop in person){
      if(this.state.userInput === prop){
        return true;
      }
    }
  })
  
  this.setState({filteredArray: filterArray})
}

  render(){
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={this.other}></input>
        <button className="confirmationButton" onClick={this.handleClick}>Filter</button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }


}

export default FilterObject;
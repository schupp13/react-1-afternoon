import React, {Component} from 'react';

class FilterString extends Component{
  constructor(){
    super();
    this.state = {
      unFilteredArray: ['one', 'two', 'three', 'four'],
      userInput: '',
      filteredArray: []
    }

    this.handleChangeConstructor = this.handleChange.bind(this);
    this.handleClickConstructor = this.handleClick.bind(this);
  }


  handleChange(e) {
    this.setState({userInput: e.target.value});
  }

  
  handleClick(){
    let filterArr = this.state.unFilteredArray.filter(e =>{
      if(e.includes(this.state.userInput)){
        return true;
        
      }
    });
    
    
    this.setState({
      filteredArray: filterArr,
      userInput: ''
    });
  }




  render(){
  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
    
      <input  className="inputLine" onChange={this.handleChangeConstructor}></input>
      <button className="confirmationButton" onClick={this.handleClickConstructor}>Filter</button>
      <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
    </div>
  )
  }
}

export default FilterString;
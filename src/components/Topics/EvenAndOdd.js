import React, {Component} from 'react';

class EvenAndOdd extends Component{
  
 constructor(){
  super();
  
  this.state = {
    userInput: '',
    evensArray: [],
    oddArray: []
   }
   this.handleClick = this.handleClick.bind(this);
  
 }

 handleClick(){
  let array = this.state.userInput.split(',');
  let evens = [];
  let odds = [];
  for(let i = 0; i < array.length; i++){
   if(array[i] % 2 === 0){
    evens.push(array[i]);
   }else{
    odds.push(array[i]);
   }
  }

  this.setState({
    evensArray: evens, 
    oddArray: odds
  })

  console.log(this.evensArray);
  console.log(this.oddsArray);
 }

  render(){
    return( 
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input className="inputLine" onChange={(e) => {
        this.setState({userInput: e.target.value});
        console.log(this.state.unserInput);
      }}></input>
      <button className="confirmationButton" onClick={this.handleClick}>Split</button>
      <span className="resultsBox">Odds: [{this.state.oddArray.join(",")}]</span>
      <span className="resultsBox">Evens: [{this.state.evensArray.join(",")}]</span>
   </div>
    )
  }
}

export default EvenAndOdd;
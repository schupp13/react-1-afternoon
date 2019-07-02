import React, {Component} from 'react';

class Sum extends Component{
  
constructor(){
super();
this.state={
  number1: 0,
  number2 : 0,
  sum: null
}

this.num1Change = this.num1Change.bind(this);
this.num2Change = this.num2Change.bind(this);
this.addClick = this.addClick.bind(this);
}

num1Change(e){
this.setState({
  number1: parseInt(e.target.value)
});
}
num2Change(e){
  this.setState({
    number2: parseInt(e.target.value)
  });
}

addClick(){
  
let add = this.state.number1 + this.state.number2;
console.log(add);
this.setState({
  sum: add
});
}

  render(){
    return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input className="inputLine" onChange={this.num1Change}></input>
      <input className="inputLine" onChange={this.num2Change}></input>
      <button className="confirmationButton" onClick={this.addClick}>Add</button>
      <span  className="resultsBox">{this.state.sum}</span>
    </div>
      )
  }
  
}

export default Sum;
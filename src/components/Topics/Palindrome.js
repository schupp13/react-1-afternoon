import React, {Component} from 'react';

class Palindrome extends Component{
  constructor(){
    super();
    this.state = {
      userInput: '',
      palindrome: ''
    }
    this.changeH = this.changeHandler.bind(this);
    this.clickH = this.clickHandler.bind(this);
  }

  changeHandler(e){
    this.setState({
      userInput: e.target.value
    })
  }

  clickHandler(){
    let makeArray = this.state.userInput.split("");
    // let reverse = makeArray.reverse(); 
    let makeReverse = makeArray.reverse();
    let reverseJoin = makeReverse.join('');
    console.log(reverseJoin);

    if(this.state.userInput === reverseJoin){
      this.setState({
        palindrome :'true'
      });
    }else{
      this.setState({
        palindrome :'false'
      });
    }
    
    }

    


  

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={this.changeH}></input>
        <button className="confirmationButton" onClick={this.clickH}>Test</button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome;
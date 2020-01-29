import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {

      input: '0',
      value: null,
      operator: null,
      waiting: false,
    }
  }

  addToInput = val => {

    const { input, waiting } = this.state
    
    if (waiting) 
    {
      this.setState({
        input: String(val),
        waiting: false
      })
    } 
    else 
    {
      if (input === '0')
      {
        this.setState({ input: String(val) })
      }
      else
      {
        this.setState({ input: input + val })
      }
    }
  }

  calculate = val => {    

    const { value, input, operator } = this.state
    let inputValue = parseFloat(input)
    
    if (value == null) 
    {
      this.setState({ value: inputValue })
    } 
    else if (operator) 
    {
      let currentValue = value
      let newValue = null

      switch (operator) 
      {      
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '*':
          newValue = currentValue * inputValue;
          break;
        case '/':
          newValue = currentValue / inputValue;
          break;
        case '=':
          newValue = input;
          break;
      }
      
      this.setState({
        value: newValue,
        input: String(newValue)
      })
    }
    
    this.setState({
      operator: val,
      waiting: true
    })
  }

  dot = () => {
    
    const { input } = this.state
    
    this.setState({
      input: input + '.',
      waiting: false
    })
  }
  
  clearInput = () => {
    this.setState({input: '0'});
  }

  render() {
    
    return (

      <div className="App">
        <header className="App-header">
          <h1>Calculatrice</h1>
          <div className="calculator-container">
            <div className="row">
              <ClearButton handleClear={this.clearInput}>AC</ClearButton>
              <div className="input">{ this.state.input  }</div>
            </div>
            <div className="row">
              <Button handleClick={() => { return this.addToInput(9) }}>9</Button>
              <Button handleClick={() => { return this.addToInput(8) }}>8</Button>
              <Button handleClick={() => { return this.addToInput(7) }}>7</Button>
              <Button handleClick={() => { return this.calculate('+') }}><strong>+</strong></Button>
            </div>
            <div className="row">
              <Button handleClick={() => { return this.addToInput(6) }}>6</Button>
              <Button handleClick={() => { return this.addToInput(5) }}>5</Button>
              <Button handleClick={() => { return this.addToInput(4) }}>4</Button>
              <Button handleClick={() => { return this.calculate('-') }}><strong>-</strong></Button>
            </div>
            <div className="row">
              <Button handleClick={() => { return this.addToInput(3) }}>3</Button>
              <Button handleClick={() => { return this.addToInput(2) }}>2</Button>
              <Button handleClick={() => { return this.addToInput(1) }}>1</Button>
              <Button handleClick={() => { return this.calculate('*') }}><strong>*</strong></Button>
            </div>
            <div className="row">
              <Button handleClick={() => { return this.addToInput(0) }}>0</Button>
              <Button handleClick={() => { return this.dot() }}><strong>.</strong></Button>
              <Button handleClick={() => { return this.calculate('=') }}><strong>=</strong></Button>
              <Button handleClick={() => { return this.calculate('/') }}><strong>/</strong></Button>
            </div>
          </div>
        </header>
      </div>
    );
  } 
}

export default App;

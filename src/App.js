import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const PIZZA_URL = "http://localhost:3000/pizzas";

class App extends Component {

  state = {
    pizzas: []
  }

  componentDidMount(){
    this.getPizzas().then(this.updateStateWithPizzas)
  }

  getPizzas = () => {
    return fetch(PIZZA_URL).then(resp => resp.json())
  }

  updateStateWithPizzas = (pizzas) => {
    this.setState({
      pizzas
    })
    console.log(this.state)
  }

  postPizza = (data) => {
    let configObject = this.generateConfigObject("POST", data)
    return fetch(PIZZA_URL, configObject).then(resp => resp.json())
    .then(newPizza => this.setState({
      pizzas: [
        ...this.state.pizzas,
        newPizza
      ]
    }))
  }

  generateConfigObject = (method, data) => {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm postPizza={this.postPizza}/>
        <PizzaList pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;

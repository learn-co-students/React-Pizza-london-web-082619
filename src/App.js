import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
      selectedPizza: ''
  }

  fetchPizza = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  componentDidMount(){
    this.fetchPizza()
  }

  setSelectedPizza = (pizzaId) => {
    this.setState({
      selectedPizza: pizzaId
    })
  }

  getSelectedPizza (){
    return this.state.pizzas.find(pizza => pizza.id === this.state.selectedPizza)
  }
  submitHandler = (pizza) =>{
    this.setState({ pizzas: this.state.pizzas.map(p => {
      if (p.id === pizza.id) return pizza
      return p
      }
    
    ) })
  }
  
  
  render() {
    const pizza = this.getSelectedPizza() 
    // console.log(pizza.id || pizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm {...pizza} 
          handleSubmit={this.submitHandler} 
        />

        <PizzaList pizzas={this.state.pizzas} handleClick={this.setSelectedPizza}/>
      </Fragment>
    );
  }
}

export default App;

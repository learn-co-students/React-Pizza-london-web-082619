import React, { PureComponent, Fragment } from 'react';
import { API } from "./adapters/API"
import { DEFAULT_PIZZA } from "./settings"
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends PureComponent {

  state = {
    pizzas: [],
    selectedPizza: DEFAULT_PIZZA
  }

  componentDidMount() {
    API.getPizzas()
      .then(pizzas => this.setState({pizzas: pizzas}))
      .catch(console.error)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          selectedPizza={this.state.selectedPizza}
          updatePizza={this.updatePizza}
          patchPizza={this.patchPizza}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          editPizza={this.editPizza}
        />
      </Fragment>
    );
  }

  updatePizza = pizza => {
    this.setState({ selectedPizza: pizza });
  }

  patchPizza = pizza => {
    API.patchPizza(pizza)
      .then(patchedPizza => this.setState(prevState => {
        return {
          pizzas: prevState.pizzas.map(pizza => {
            if (pizza.id === patchedPizza.id) {
              return patchedPizza;
            } else {
              return pizza;
            }
          }),
          selectedPizza: DEFAULT_PIZZA
        }
      }))
      .catch(console.error)
  }

  editPizza = pizza => {
    this.setState({ selectedPizza: pizza });
  }
}

export default App;

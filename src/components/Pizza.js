import React, { PureComponent } from "react"

class Pizza extends PureComponent {

  render() {
    const pizza = this.props.pizza;

    return(
      <tr>
        <td>{pizza.topping}</td>
        <td>{pizza.size}</td>
        <td>{pizza.vegetarian ? "Yes" : "No"}</td>
        <td><button type="button" className="btn btn-primary" onClick={this.handleClick}>Edit Pizza</button></td>
      </tr>
    )
  }

  handleClick = () => {
    this.props.editPizza(this.props.pizza);
  }

}

export default Pizza

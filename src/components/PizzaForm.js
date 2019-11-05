import React from "react"

class PizzaForm extends React.Component {

  state = {
    topping: "",
    size: "Small",
    vegetarian: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleVegetarian = (event) => {
      if (event.target.checked && event.target.name === "vegetarian"){
        this.setState({
          vegetarian: true
        })
      } else {
          this.setState({
            vegetarian: false
          })
      }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postPizza(this.state).then(() => this.setState({
      topping: "",
      size: "",
      vegetarian: null
    }))
  }

  render(){

    const {topping, size, vegetarian} = this.state

    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={topping} onChange={this.handleChange}/>
        </div>
        <div className="col">
          <select value={size} name="size" className="form-control" onChange={this.handleChange} >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value="Vegetarian" checked={vegetarian ? true : false} onChange={this.toggleVegetarian} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name = "not-vegetarian" type="radio" value="Not Vegetarian" checked={!vegetarian ? true : false} onChange={this.toggleVegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
  
}

export default PizzaForm

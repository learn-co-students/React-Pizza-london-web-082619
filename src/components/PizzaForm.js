import React from "react"

class PizzaForm extends React.Component {
  state = {
    id: null,
    topping: '',
    size: '',
    vegetarian: ''
  }

  componentDidMount() {
    console.log(this.props.vegetarian)
    this.setState({
      id: this.props.id,
      topping: this.props.topping,
      size: this.props.size,
      vegetarian: this.props.vegetarian
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // this is called whenever props or state changes
    // we need to store the new note in state
    // when props.note is a newly-selected note
    if(this.state.id !== this.props.id){
    
      this.setState({
        id: this.props.id,
        topping: this.props.topping,
        size: this.props.size,
        vegetarian: this.props.vegetarian
      })
        
    }
  }

  
  handleChange = (e) => {
    let value = e.target.type === 'radio' ? e.target.checked : e.target.value
    if (e.target.value === 'Vegetarian'){
      value= true
    } else if (e.target.value === 'Not Vegetarian') {
      value= false
    } 
      this.setState({
        [e.target.name]: value
      })

  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/pizzas/${this.state.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": 'application/json',
        Access: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    this.props.handleSubmit(this.state)
  }
  render() {
    const {topping, size, vegetarian} = this.state
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" 
                name='topping'
                value={ topping }
                onChange={this.handleChange}
              />
          </div>
          <div className="col">
            <select name='size' value={size} className="form-control" onChange={this.handleChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" 
                name='vegetarian'
                onChange={this.handleChange}
                checked={vegetarian === true}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" 
                name='vegetarian'
                onChange={this.handleChange}
                checked={vegetarian === false }/>
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
PizzaForm.defaultProps = {
  topping: '',
  size: '',
  vegetarian: ''
}
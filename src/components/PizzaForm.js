import React from "react"

const PizzaForm = ({selectedPizza, updatePizza, patchPizza}) => {

  const handleChange = event => {
    const editedPizza = { ...selectedPizza };
    if (event.target.name === "vegetarian") {
      editedPizza.vegetarian = event.target.value;
    } else {
      editedPizza[event.target.name] = event.target.value;
    }
    updatePizza(editedPizza);
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    patchPizza(selectedPizza);
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input
              name="topping"
              type="text"
              className="form-control"
              placeholder="Pizza Topping"
              value={selectedPizza.topping}
              onChange={handleChange}
            />
        </div>
        <div className="col">
          <select
            name="size"
            className="form-control"
            value={selectedPizza.size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              name="vegetarian"
              className="form-check-input"
              type="radio"
              value="true"
              checked={selectedPizza.vegetarian.toString() === "true"}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input
              name="vegetarian"
              className="form-check-input"
              type="radio"
              value="false"
              checked={selectedPizza.vegetarian.toString() !== "true"}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm

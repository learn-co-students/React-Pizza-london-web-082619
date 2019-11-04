const BASE_URL = "http://localhost:3000/pizzas/"

const getPizzas = () => {
  return fetch(BASE_URL)
    .then(objectify);
}

const patchPizza = pizza => {
  const config = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(pizza)
  }
  return fetch(BASE_URL + pizza.id, config)
    .then(objectify);
}

const objectify = res => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("HTTP status code " + res.status);
  }
}

export const API = {
  getPizzas,
  patchPizza
}
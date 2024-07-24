const elCards = document.querySelector(".cards");

const pokemons = [
  {
    name: "Pokemons",
    type: "Grass, Poison",
    weight: "7 kg",
    age: "99",
  },
  {
    name: "Pokemons",
    type: "Grass, Poison",
    weight: "13 kg",
    age: "99",
  },
  {
    name: "Pokemons",
    type: "Grass, Poison",
    weight: "100 kg",
    age: "99",
  },
  {
    name: "Pokemons",
    type: "Grass, Poison",
    weight: "22 kg",
    age: "99",
  },
  {
    name: "Pokemons",
    type: "Grass, Poison",
    weight: "19 kg",
    age: "99",
  },
  {
    name: "Pokemons",
    type: "Grass, Poison",
    weight: "91 kg",
    age: "99",
  },
  {
    name: "Pokemons",
    type: "Grass, Poison",
    weight: "9 kg",
    age: "99",
  },
  {
    name: "Pokemons",
    type: "Grass, Poison",
    weight: "88 kg",
    age: "99",
  },
];

for (let i = 0; i < pokemons.length; i++) {
  const test = pokemons[i];
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerHTML = `
  <img src="images/pokemon.png">
  <hr>
  <h3> ${test.name} </h3>
  <p> ${test.type} </p>
  <p> ${test.weight} </p>
  <p> ${test.age} </p>
  `;
  elCards.appendChild(newCard);
}

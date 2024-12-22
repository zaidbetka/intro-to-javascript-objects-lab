

const pokemon = require('./data.js');




// Define the game object
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  };
  
  console.log("----------------------- Exercise 1 -----------------------");

  // Inspect the pokemon array
console.dir(pokemon, { maxArrayLength: null });

// Log just the name of the Pokemon with the number 59
const pokemon59 = pokemon.find((poke) => poke.number === 59);
console.log(pokemon59.name); // Outputs the name of the Pokemon with number 59

console.log("----------------------- Exercise 2 -----------------------");

// Log the game object
console.log(game);

// Comment out the above console.log after inspection
// Continue to next exercise

console.log("----------------------- Exercise 3 -----------------------");


// Add a new property to the game object
game.difficulty = "Medium"; // Choose your preferred difficulty value

console.log(game.difficulty); // Verify the new property has been added
console.log("----------------------- Exercise 4 -----------------------");

// Solve Exercise 4
const starterPokemon = pokemon.find((poke) => poke.starter === true);
game.party.push(starterPokemon);

console.log(game.party); // Verify the starter Pokémon was added to the party


console.log("----------------------- Exercise 5 -----------------------");
// Solve Exercise 5
const selectedPokemon = pokemon.filter((poke) => poke.type === "Water").slice(0, 3);
game.party.push(...selectedPokemon);

console.log(game.party); // Verify three more Pokémon were added to the party


console.log("----------------------- Exercise 6 -----------------------");

// Solve Exercise 6
game.gyms.forEach((gym) => {
    if (gym.difficulty < 3) {
      gym.completed = true;
    }
  });
  
  console.log(game.gyms); // Verify gyms with difficulty below 3 are completed
  


  console.log("----------------------- Exercise 7 -----------------------");


  // Solve Exercise 7
const evolvedForm = pokemon.find((poke) => poke.number === 2); // Example: Ivysaur
const starterIndex = game.party.findIndex((poke) => poke.number === 1); // Bulbasaur's index
game.party.splice(starterIndex, 1, evolvedForm);

console.log(game.party); // Verify starter Pokémon is replaced with its evolved form




console.log("----------------------- Exercise 8 -----------------------");

// Solve Exercise 8
game.party.forEach((poke) => console.log(poke.name)); // Print the names of Pokémon in the party


console.log("----------------------- Exercise 9 -----------------------");


// Solve Exercise 9
const starterPokemonNames = pokemon.filter((poke) => poke.starter === true).map((poke) => poke.name);
console.log(starterPokemonNames); // Log the names of all starter Pokémon


console.log("----------------------- Exercise 10 -----------------------");

// Solve Exercise 10
game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);
  };
  
  const wildPokemon = pokemon.find((poke) => poke.number === 10); // Example: Caterpie
  game.catchPokemon(wildPokemon);
  
  console.log(game.party); // Verify the new Pokémon is caught and added to the party
  


  console.log("----------------------- Exercise 11 -----------------------");


  // Solve Exercise 11
game.catchPokemon = function (pokemonObj) {
    const pokeball = this.items.find((item) => item.name === "pokeball");
    if (pokeball) pokeball.quantity--;
    this.party.push(pokemonObj);
  };
  
  const anotherWildPokemon = pokemon.find((poke) => poke.number === 13); // Example: Weedle
  game.catchPokemon(anotherWildPokemon);
  
  console.log(game.items); // Verify pokeball quantity is decremented
  console.log(game.party); // Verify the Pokémon is added to the party
  

  console.log("----------------------- Exercise 12 -----------------------");


  // Solve Exercise 12
game.gyms.forEach((gym) => {
    if (gym.difficulty < 6) {
      gym.completed = true;
    }
  });
  
  console.log(game.gyms); // Verify gyms with difficulty below 6 are completed
  
  console.log("----------------------- Exercise 13 -----------------------");

  // Solve Exercise 13
game.gymStatus = function () {
    const gymTally = { completed: 0, incomplete: 0 };
    this.gyms.forEach((gym) => {
      if (gym.completed) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    });
    console.log(gymTally);
  };
  
  game.gymStatus(); // Check gym status

  console.log("----------------------- Exercise 14 -----------------------");
  
  // Solve Exercise 14
game.partyCount = function () {
    return this.party.length;
  };
  
  console.log(game.partyCount()); // Check the number of Pokémon in the party
  

  console.log("----------------------- Exercise 15 -----------------------");


  // Solve Exercise 15
game.gyms.forEach((gym) => {
    if (gym.difficulty < 8) {
      gym.completed = true;
    }
  });
  
  console.log(game.gyms); // Verify gyms with difficulty below 8 are completed
  

  console.log("----------------------- Exercise 16 -----------------------");


  // Solve Exercise 16
console.log(game); // Review the entire game object




const searchBar = document.getElementById('searchBar');
let pokemons = [];

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value;
  const filteredPokemon = pokemons.filter((pokemon) => {
      return (
          pokemon.name.includes(searchString) //search if the entered letter occurs in a pokemon.name
      );
  });
 displayPokemon(filteredPokemon);
});

//first get t he information from the API
const fetchPokemons = async () => { //async function-> always return a promise and wrap non_promises in it.
    url = `https://pokeapi.co/api/v2/pokemon?limit=40`; //await -> makes JS wait until that promise settles and return its results
     res = await fetch(url);
    data = await res.json();
    pokemons = data.results.map((data, index) => ({ //Create an object and define its properties
        name: data.name,
        id: index +1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png` 
    }))
    .slice(0, 20);
    
    displayPokemon(pokemons);
};
//for the second Page because I didn't understand how to do pagination right
const fetchPokemons2 = async () => { //async function-> always return a promise and wrap non_promises in it.
    url = `https://pokeapi.co/api/v2/pokemon?limit=40`; //await -> makes JS wait until that promise settles and return its results
     res = await fetch(url);
    data = await res.json();
    pokemons = data.results.map((data, index) => ({ 
        name: data.name,
        id: index +1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png` 
    }))
    .slice(20, 40);
    
    displayPokemon(pokemons);


};
//function to display the information 
const displayPokemon = (pokeman) => {
    const pokemonHTML = pokeman.map((pokemon) =>
               `
    <li class="card"> 
        <img class="card-image" src="${pokemon.image}"/>
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
    </li>
        `
        )
        .join('');
    pokedex.innerHTML = pokemonHTML;
    ;
};


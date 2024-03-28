import react from 'react';
import PokemonCard from "./components/PokemonCard";


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div>
      {pokemonList.map((pokemon, index)=> (
        <PokemonCard key={index} pokemon={pokemon}/>
      ))}
    </div>
  );
  
}

export default App;

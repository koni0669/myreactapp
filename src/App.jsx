import react from 'react';
import PokemonCard from "./components/PokemonCard";
import { useState } from 'react';



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <div>
      <h1>Pokémon Viewer</h1>
      <div>
        {pokemonIndex > 0 && (
          <button onClick={handlePreviousClick}>Précédent</button>
        )}
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex < pokemonList.length - 1 && (
          <button onClick={handleNextClick}>Suivant</button>
        )}
      </div>
    </div>
  );
}

export default App;
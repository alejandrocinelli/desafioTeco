import { createContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  

  const [pokemons, setPokemons] = useState("");

  const getDataApi = async () => {
    try {
      console.log("llamar a la api entro joya el pibe");
      const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

      const getData = await fetch(url)
      const data = await getData.json()
        console.log(data.results)
        setPokemons(data.results)

    } catch (error) {
        console.log(error);
    }
  };

  

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        getDataApi
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;

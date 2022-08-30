import { createContext, useState,useEffect } from "react";


const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {

  const [loginOk, setLoginOk] = useState(false);
  
  const [pokelist, setPokelist] = useState([])

  const [open, setOpen] = useState(false)

  const [pokemonModal, setPokemonModal] = useState([])

 useEffect(() => {
  
  if (loginOk) {
    
    console.log("loginOk")

  }
  

 }, [loginOk])
 

  const getDataApi = async () => {
    
    try {
     // console.log("llamar a la api entro joya el pibe");
      const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

      const getData = await fetch(url)
      const data = await getData.json()
       // console.log(data.results)
       // setPokemons(data.results)
      
      const createPokemonObject = (result) => {
        result.forEach(async (pokemon) => {
          const url = pokemon.url;
          const res = await fetch(url);
          const data = await res.json();
          setPokelist((currentList) => [...currentList, data]);
        });
      }  
      createPokemonObject(data.results)


    } catch (error) {
        console.log(error);
    }
  };

  const deletePokemon = (id) => {
    setPokelist(pokelist.filter((pokemon) => pokemon.id !== id));

  }
 
  return (
    <PokemonContext.Provider
      value={{
        open,setOpen,
        setLoginOk,
        getDataApi,
        pokelist,
        pokemonModal,
        setPokemonModal,
        deletePokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;

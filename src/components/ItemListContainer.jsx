import img from "../img/pokebola.png";
import ItemContainerPokemon from "./ItemContainerPokemon";
import usePokemon from "../hooks/usePokemon"
import Modal from "./Modal";
import { Link, useNavigate } from "react-router-dom"

const ItemListContainer = () => {

    const {pokelist,pokemonModal,setPokelist, setPokemonModal} = usePokemon()
    const navigate = useNavigate()
   
  return (
    <div className="bg-red-400">
        
        <div className="flex flex-col">
           <button className=" text-xs text-right pr-5 mb-5 " 
           onClick={() => {setPokelist([]),
           setPokemonModal([]),
           navigate("/") 
          }
           }>
              <p className="text-sm pr-5 pt-3 font-bold">Log Out</p>
          </button>
        </div>
        
      <div className="mb-3  p-8">
        <img src={img} alt="pokemon" className="w-20 h-20 mx-auto " />
        <p className="text-center uppercase font-semibold p-5"> La App que necesitas todos los dias</p>
      </div>
        <div className="flex h-auto flex-wrap justify-center ">

      {
        pokelist.map((pokemon) => (
          <ItemContainerPokemon key={pokemon.id} pokemon={pokemon}/>
        ))
      }
              
        </div>

        <Modal></Modal>
        
        </div>
     
    
  );
};
export default ItemListContainer;

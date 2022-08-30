import img from "../img/pokebola.png";
import ItemContainerPokemon from "./ItemContainerPokemon";
import usePokemon from "../hooks/usePokemon"
import Modal from "./Modal";

const ItemListContainer = () => {

    const {pokelist,pokemonModal} = usePokemon()

  return (
    <div className="bg-red-400">
      
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

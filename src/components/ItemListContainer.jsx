import img from "../img/pokebola.png";
import ItemContainerPokemon from "./ItemContainerPokemon";
import usePokemon from "../hooks/usePokemon"
import Modal from "./Modal";
import { Link } from "react-router-dom"

const ItemListContainer = () => {

    const {pokelist,pokemonModal} = usePokemon()

   // hay que re iniciar pokelist para que se actualice el estado en vacio y no se quede con el estado anterior
   //se me ocurre podemos hacer un botton y que al hacer click se reinicie el estado de pokelist y que tenga un useNavigate para que nos lleve a la pagina de inicio
  return (
    <div className="bg-red-400">
         <Link className="text-xs text-right pr-5 mb-5 font-semibold " to="/">
                    <p className="text-sm text-right pr-5 pt-3 font-semibold ">Log Out</p>
          </Link>
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

const ItemContainerPokemon = ({ pokemon }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-red-100 to-red-300  p-5 m-3 h-84 w-64 rounded-md shadow-2xl">
        <div className="flex justify-between">
          <p className="uppercase font-bold text-lg">{pokemon.name}</p>
          <p className=" font-medium">
            <span>{pokemon.weight}Kg </span>
          </p>
        </div>
        <div className="container">
       
          <img
          src={pokemon.sprites.front_default}
          alt="pokemon"
          className="w-40 h-40 mx-auto p-3 "
        />

            
        </div>
        
        <div className="container">
          <p className="font-semibold "> 
            Exp: <span className="font-normal normal-case">
               {pokemon.base_experience}%
            </span>
          </p>
          <p className="font-semibold">Mov: <span className="font-normal normal-case"> {pokemon.moves[0].move.name}</span></p>
          <p className="font-semibold">Abi: <span className="font-normal normal-case"> {pokemon.abilities[0].ability.name} </span></p>
         
        </div>
        <button className="container mt-2">
          <p className="text-center uppercase font-semibold text-sm">ver mas</p>
        </button>
      </div>
    </>
  );
};
export default ItemContainerPokemon;

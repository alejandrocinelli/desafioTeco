import Formulario from "./Formulario";
import img from "../img/pokebola.png";

const LoginContainer = () => {
  return (
    <div className=" ">
      <div className="flex h-screen w-screen relative ">
        <div className="bg-white sm:w-1/3 w-full  sm:bg-red-400"></div>
        <div className=" w-full "></div>

        <div
          className="sm:h-4/5 h-full absolute inset-0 top-20 align-middle
       bg-transparent shadow-2xl rounded-lg sm:right-20 sm:left-12 md:right-20 
       md:left-20  xl:left-24 2xl:left-32 "
        >
          <div className="container flex flex-col h-full w-full sm:flex-row sm:h-full sm:w-full ">
            <div className=" sm:w-1/5 sm:h-full h-auto sm:bg-transparent bg-red-400  ">
              <img
                src={img}
                alt="Logo"
                border="0"
                className="w-16 h-16 mx-auto mt-3 sm:mt-52 "
              ></img>
              <p className="text-center uppercase font-bold">pokemon</p>
              <p
                className="p-1  text-center text-xs font-semibold 
          sm:align-bottom sm:justify-center sm:text-m sm:h-auto"
              >
                La App que necesitas todos los dias
              </p>
            </div>

            <div className=" sm:w-4/5 sm:h-full h-4/5">
              <div>
                <Formulario></Formulario>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginContainer;

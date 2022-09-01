import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import usePokemon from "../hooks/usePokemon"
import img from "../img/pokebola.png";
import Errorlog from "./Errorlog";
import swal from 'sweetalert';


const ForgotPassword = () => {

  const navigate = useNavigate();
  const {error, setError } = usePokemon()

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === "") {
     
      setError(true)
      return;
    }
    setError(false)
    swal("We will send you an email to", ` ${email}`, "success");
    navigate("/");
    //aca podriamos usar un sweetalert para que nos avise que se envio el mail
  };

  return (
    <div>
      <div className=" ">
        <div className="flex h-screen w-screen relative ">
          <div className="bg-white sm:w-1/3 w-full  sm:bg-red-400"></div>
          <div className=" w-full "></div>

          <div
            className="h-4/5 absolute inset-0 top-20 align-middle
           bg-transparent shadow-2xl rounded-lg sm:right-20 sm:left-12 
            md:right-20 md:left-20 xl:left-24 2xl:left-32 "
          >
            <div className="flex flex-col h-full w-full sm:flex-row sm:h-full sm:w-full ">
              <div className=" sm:w-1/5 sm:h-full h-1/5 sm:bg-transparent bg-red-400  ">
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
                  <div className="">
                    <p className="text-xs text-right pr-5 font-semibold mt-3">
                      Need Help?
                    </p>
                    <div className="container mt-10">
                      <p className="font-bold text-center">
                        Reset your password
                      </p>
                      <div className="flex pt-20 xl:px-10 md:px-7">
                        <form
                          onSubmit={handleSubmit}
                          className="bg-transparent py-5 px-5 text-sm font-bold w-full"
                        >
                          <div className="mb-3">
                            <div>
                              <label className="block text-slate-700">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                placeholder="enter your email to reset your password"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-2 w-full p-2 mt-2  placeholder-slate-300 rounded-sm "
                              />
                            </div>
                          </div>

                          <button
                            type="subtmit"
                            className=" bg-red-400 p-3 mt-5
                        w-full font-semibold  hover:bg-red-500 hover:text-white rounded-sm"
                          >
                            Reset
                          </button>
                          {error && <Errorlog />}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;

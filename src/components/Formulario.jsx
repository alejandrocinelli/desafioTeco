import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import usePokemon from "../hooks/usePokemon"

import Errorlog from "./Errorlog"
//import db from "../db/db.js"

const Formulario = () => {

    const {getDataApi,setLoginOk} = usePokemon()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const user = {
        email: "user@mail.com",
        password: "1234"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(email, password)
       
        if([email, password].includes("")) {
            setError(true)
            return
        }
        setError(false)
        if(email === user.email && password=== user.password) {
            alert("Bienvenido")
            setEmail("")
            setPassword("")
            navigate("/home")
            getDataApi()
            setLoginOk(true)
            
        }
        else {
            alert("Datos incorrectos")
        }
    }

  return (
    <>
     <div className="">
        <p className="text-xs text-right pr-5 font-semibold mt-3">Need Help?</p>
        <div className="container mt-10">
          <p className="font-bold text-center">Log in</p>
          <div className="flex pt-20 xl:px-10 md:px-7">
            <form
              onSubmit={handleSubmit}
              className="bg-transparent py-5 px-5 text-sm font-bold w-full"
            >
              <div className="mb-3">
                <div>
                  <label className="block text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="joe@mail.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="border-2 w-full p-2 mt-2  placeholder-slate-300 rounded-sm "
                  />
                </div>
              </div>

              <div className="mb-3">
                <div>
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="border-2 p-2 mt-2 w-full placeholder-slate-300 rounded-sm"
                  />
                </div>
              </div>
              <div>
                <Link className="text-xs text-right pr-5 mb-5 font-semibold " to="/forgotPassoword">
                     <p className="text-xs text-right pr-5 mb-5 font-semibold ">Forgot password?</p>
                </Link>
               
              </div>
              <button
                type="subtmit"
                className=" bg-red-400 p-3 mt-5
                 w-full font-semibold  hover:bg-red-500 hover:text-white rounded-sm"
              >
                Login
              </button>

                {error && <Errorlog />}
            </form>
          </div>

       
        </div>
      </div>
    </>
  )
}
export default Formulario
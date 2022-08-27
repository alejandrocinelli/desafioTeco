import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import ItemListContainer from "./components/ItemListContainer";
import LoginContainer from "./components/LoginContainer";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  return (
    <div>
      <PokemonProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />}></Route>
          <Route path="/forgotPassoword" element={<ForgotPassword />}></Route>
          <Route path="/home" element={<ItemListContainer />}></Route>
        </Routes>
      </BrowserRouter>
      
      </PokemonProvider>
    </div>
  );
}

export default App;

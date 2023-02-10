import react, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import HambergerMenu from './components/HambergerMenu';

export const AppContext = createContext();


function App() {

  const [isExpended, setIsExpended] = useState(false);


  return (
    <div className="container font-Poly text-gray-400">
        <BrowserRouter basename='/'>
        <AppContext.Provider value={{isExpended, setIsExpended}}>
        <Navbar />
          <HambergerMenu />
        </AppContext.Provider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

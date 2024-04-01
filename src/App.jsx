import './App.css';
import React from 'react';
import Hader from './components/Hader/Hader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Route también
import Cards from './components/Cards/cards';
import Personajes from './components/Screens/Personajes';
import Capitulos from './components/Screens/Capitulos';

const App = () => {
  return (
    <div className="">
      <Router>
        <Hader/>
        <Routes>
         <Route path='/Personajes' element = {<Personajes/>}/>
         <Route path='/Capitulos' element = {<Capitulos/>}/>
        </Routes>
      </Router>
      <Cards />
    </div>
  );
}

export default App;

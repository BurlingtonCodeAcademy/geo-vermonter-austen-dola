import './App.css';
import { useState, useEffect } from 'react'
import StartButton from './components/Start'
import ReturnButton from './components/Return'
import NavBar from './components/Nav'
import MoveButtons from './components/Movement'

import Map from './components/Map'

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])

  return (
    <div>
      <Map center={center} />
      <StartButton/>
      <ReturnButton/>
      <NavBar/>
      <MoveButtons/>

    </div>
  );
}

export default App;

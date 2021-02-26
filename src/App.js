import './App.css';
import { useState, useEffect } from 'react'
import StartButton from './components/Start'
import ReturnButton from './components/Return'
import NavBar from './components/Nav'
import MoveButtons from './components/Movement'
import GuessButton from './components/GuessButton'
import Map from './components/Map'
import Quit from './components/Quit';
import Info from './components/Info';
import GuessBox from './components/GuessBox';

function App() {

  const [center, setCenter] = useState([43.88, -72.7317])
  const [display, setDisplay] = useState(false);
  

  return (
    <div>
      <Map center={center} />
      <StartButton/>
      <ReturnButton/>
      <NavBar/>
      <MoveButtons/>
      <Quit/> 
      <button
      
      onClick={(evt) => {
        setDisplay(!display )}} // change !display to true to un toggle
    >
      Info
    </button>
    
    {display && <Info/>}
<GuessButton/>
  <GuessBox/>
      

    </div>
  );
}

export default App;

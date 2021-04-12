// Importing all dependencies
import "./App.css";
import { useState, useEffect } from "react";
import StartButton from "./components/Start";
import NavBar from "./components/Nav";
import MoveButtons from "./components/Movement";
import GuessButton from "./components/GuessButton";
import Map from "./components/Map";
import Quit from "./components/Quit";
import Info from "./components/Info";
import GuessBox from "./components/GuessBox";
import Answer from "./components/Answer";

function App() {
  // each turn Coordinates
  const [Coor, setCoor] = useState([]);
  //start button pressed
  const [startPress, setStartPress] = useState(false);

  const [center, setCenter] = useState([43.88, -72.7317]);
  const [display, setDisplay] = useState(false);
  const [displayoptions, setDisplayOptions] = useState(false);
  const [rndLocation, setRndLocation] = useState(center);

  //answer var
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  // this is bring all of the javascript pages together
  return (
    <div id="main-body">
      <button
        onClick={(evt) => {
          setDisplay(!display);
        }}
      >
        Info
      </button>

      {display && <Info />}
      <Map
        Coor={Coor}
        center={center}
        location={rndLocation}
        startPress={startPress}
      />
      <StartButton setCoor={setCoor} setStartPress={setStartPress} />
      <Answer
        Coor={Coor}
        setStartPress={setStartPress}
        startPress={startPress}
        setCounty={setCounty}
        county={county}
        setCity={setCity}
      />

      <NavBar />
      <Quit />

      {display && <Info />}
      <button
        id="Guess"
        onClick={(evt) => {
          setDisplayOptions(!displayoptions);
        }}
      >
        Make a guess
      </button>
      {displayoptions && <GuessBox />}
    </div>
  );
}

export default App;

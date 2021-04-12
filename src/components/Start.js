// This page is going to let the player start their game
// imported dependencies
import borderData from "../data/border";
import { map } from "leaflet";
import L from "leaflet";
import leafletPip from "leaflet-pip";
import { useState } from "react";

// Function to start game
function StartButton(props) {
  const [stopButton, setstopButton] = useState(false);
//   this function picks a randomized spot in the state borders
  function PickSpot() {
    const longMax = -71.5;
    const longMin = -73.4;

    const latMax = 45.0;
    const latMin = 42.7;

    let rndLat = latMin + Math.random() * (latMax - latMin);
    let rndLong = longMin + Math.random() * (longMax - longMin);

    let randCoor = [rndLong, rndLat];
    let mapCoor = [rndLat, rndLong];
    const borderVt = L.geoJSON(borderData);
    let incArr = leafletPip.pointInLayer(randCoor, borderVt);

    //  while loop for randlong/lat in border data
    while (incArr.length !== 1) {
      rndLat = latMin + Math.random() * (latMax - latMin);
      rndLong = longMin + Math.random() * (longMax - longMin);

      randCoor = [rndLong, rndLat];
      incArr = leafletPip.pointInLayer(randCoor, borderVt);
    }
    if (incArr.length === 1) {
      mapCoor = [rndLat, rndLong];
      props.setCoor(mapCoor);
      props.setStartPress(true);
      setstopButton(true);
    }
  }
// inside the return is the start button itself and it is set to disable once the game has started
  return (
    <div>
      <button id="Start" onClick={PickSpot} disabled={stopButton}>
        Start
      </button>
    </div>
  );
}

export default StartButton;

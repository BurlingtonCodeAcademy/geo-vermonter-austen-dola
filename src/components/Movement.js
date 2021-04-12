// THis page is going to used for the overall movement while playing the game
// Importing dependencies
import { useState, useEffect } from "react";
let latMove = 0;
let longMove = 0;
function MoveButtons(props) {
  if (props.startPress === true) {
    latMove = props.location[0];
    longMove = props.location[1];
  }
  console.log("long move ==  ", longMove);
  console.log("lat move ==  ", latMove);
  // this function is used to move north from your current location
  function North() {
    props.setMoveLocation(true);
    props.setLocation((latMove += 0.002), longMove);
  }
  // this function is used to move west from your current location
  function West() {
    props.setMoveLocation(true);
    props.setLocation((longMove -= 0.002), latMove);
  }
  // this function is used to move east from your current location
  function East() {
    props.setMoveLocation(true);
    props.setLocation((longMove += 0.002), latMove);
  }
  // this function is used to move south from your current location
  function South() {
    props.setMoveLocation(true);
    props.setLocation((latMove -= 0.002), longMove);
  }
  // this is making the clickable buttons to chose your direction
  return (
    <div id="Movements">
      <button class="north" onClick={North}>
        N
      </button>
      <button class="east" onClick={East}>
        E
      </button>
      <button class="south" onClick={South}>
        S
      </button>
      <button class="west" onClick={West}>
        W
      </button>
    </div>
  );
}

export default MoveButtons;

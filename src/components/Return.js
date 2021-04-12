// imported dependencies
import { useEffect } from "react";

//function for on click
// reset the map
// take the intial random coordinates

import { useMap } from "react-leaflet";
//this is being used to return the user to their starting location
function ReturnButton(props) {
  const map = useMap();
  if (props.ReturnLocation === true) {
    map.setView(props.location, props.zoom);
  }

  return null;
}

export default ReturnButton;

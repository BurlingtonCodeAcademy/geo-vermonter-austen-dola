
import { useEffect } from "react";

//function for on click
// reset the map
// take the intial random coordinates

import { useMap } from "react-leaflet";
function ReturnButton(props) {
  // console.log('Change view')
  const map = useMap();
     if(props.ReturnLocation === true){
     
     map.setView(props.location, props.zoom);
    }

  return null;
}


export default ReturnButton;

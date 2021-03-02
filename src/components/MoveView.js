
import { useEffect } from "react";
import { useMap } from "react-leaflet";
function MoveView(props) {
  // console.log('Change view')
  const map = useMap();
     if(props.MoveLocation === true){
     
     map.setView(props.location, props.zoom);
    //  props.setMoveLocation(false)
    }

  return null;
}


export default MoveView;

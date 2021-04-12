// this page is used to move your view around in game
// imported dependencies
import { useEffect } from "react";
import { useMap } from "react-leaflet";
function MoveView(props) {
  const map = useMap();
  if (props.MoveLocation === true) {
    map.setView(props.location, props.zoom);
  }

  return null;
}

export default MoveView;

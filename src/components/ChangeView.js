//this page is to change the view of the zoomed in map
//imported dependencies
import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ChangeView(props) {
  const map = useMap();

  map.setView(props.location, props.zoom);

  return null;
}
export default ChangeView;

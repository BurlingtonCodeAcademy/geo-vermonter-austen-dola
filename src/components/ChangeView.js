import { useEffect } from "react";


import { useMap } from "react-leaflet";


function ChangeView(props){
// console.log('Change view')
const map = useMap();
   
        map.setView(props.location,props.zoom);

    return null;

}
export default ChangeView
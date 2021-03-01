import { MapContainer, TileLayer, Polygon, Marker, Polyline, useMap } from "react-leaflet";
import borderData from "../data/border";
import ChangeView from './ChangeView';
import ReturnButton from "./Return"
import MoveButtons from "./Movement"
import MoveView from './MoveView'
import "../App.css";

import { useState } from "react";
import { useEffect } from "react";




function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map(coords => [coords[1], coords[0]])
  const [MapZoom, setMapZoom] = useState(8)
  const [location,setLocation]= useState(props.location)
  const [ZoomIn,setZoomIn]= useState(8)
  const [MoveLocation, setMoveLocation] = useState(false)
//  //kkkdss
//   const [county, setCounty] = useState ("")
//   const [city, setCity] = useState ("")
const [ReturnLocation, setReturnLocation] = useState(false)
let coorMarker = props.Coor
//  console.log(coorMarker)

function resetButton(props){
  setReturnLocation(true)
  console.log('return button')
 
}
 useEffect(() => {
   props.startPress ? setLocation(props.Coor) : setLocation(props.location)
   props.startPress ? setZoomIn(12)  : setZoomIn(ZoomIn)
  
 })


 
  return (
    <div id='map-body'>
    <MapContainer id='map'
      center={location}
      zoom={8}
      
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      touchZoom={false}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={location} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}></Polygon>
       <ChangeView center={props.location} zoom={ZoomIn} location={location} /> 
        <ReturnButton center={props.location} zoom={ZoomIn} location={location} ReturnLocation={ReturnLocation}/>
      <MoveView center={props.location} zoom={ZoomIn} location={location} MoveLocation={MoveLocation} setMoveLocation={setMoveLocation} startPress={props.startPress} />
    </MapContainer>
    
    <MoveButtons location={location} setLocation={setLocation} setReturnLocation={setReturnLocation} setMoveLocation={setMoveLocation}/>
    <button onClick={resetButton}>Return</button>
    {console.log("location is",location)}
   
    </div>
  );
}

export default Map;

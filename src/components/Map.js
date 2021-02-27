import { MapContainer, TileLayer, Polygon, Marker, Polyline, useMap } from "react-leaflet";
import borderData from "../data/border";
import ChangeView from './ChangeView'

import { useState } from "react";
import { useEffect } from "react";



function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map(coords => [coords[1], coords[0]])
  // const [MapZoom, setMapZoom] = useState(8)
  const [location,setLocation]= useState(props.location)
  const [ZoomIn,setZoomIn]= useState(8)
  
let coorMarker = props.Coor
 console.log(coorMarker)

 useEffect(() => {
   props.startPress ? setLocation(props.Coor)  : setLocation(props.location)
   props.startPress ? setZoomIn(12): setZoomIn(ZoomIn)
 
  

   
 })
 
  return (
    <MapContainer
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
    </MapContainer>
  );
}

export default Map;

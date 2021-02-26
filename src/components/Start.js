import borderData from "../data/border";
import { map } from "leaflet";
import  L  from "leaflet";
import  leafletPip  from "leaflet-pip";
import {useState} from 'react'





function StartButton(props){


    function PickSpot(){

        // const [Coor, setCoor] = useState([])
    
         
        // //function for on click 
        
        
        const longMax =  -71.5;
        const longMin = -73.4;
        
        const latMax =  45.0;
        const latMin =  42.7;
        
        let rndLat = latMin + (Math.random() * (latMax - latMin));
        let rndLong = longMin +(Math.random() * (longMax - longMin));
        
        let randCoor =  [rndLong,rndLat]
        let mapCoor = [rndLat,rndLong]
        const borderVt =L.geoJSON(borderData);
        let incArr = leafletPip.pointInLayer(randCoor, borderVt);
        
        console.log('incArr ',incArr)
        // console.log('include Array ',Coor)
        console.log('coordinates ',randCoor)
         
      
        //  while loop for randlong/lat in border data
         while (incArr.length!== 1){
        
            rndLat = latMin + (Math.random() * (latMax - latMin));
            rndLong = longMin +(Math.random() * (longMax - longMin));
            
            randCoor =  [rndLong,rndLat]
            incArr = leafletPip.pointInLayer(randCoor, borderVt);
        
            
         }
         if (incArr.length ===1){props.setCoor(mapCoor)}
    }




 return(
   
     <div>
    

        <button onClick={PickSpot} >Start</button>
    </div>
    )

}

export default StartButton
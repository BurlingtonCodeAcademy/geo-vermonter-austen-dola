import { useState } from "react";
import { useEffect } from "react";
import StartButton from "./Start";

function Answer(props) {
  
  // Input props: Longitude Latitude start press
  //Output city and county
  const data = "";
  // const [county, setCounty] = useState ("")
  // const [city, setCity] = useState ("")
  const [LatAnswer, setLatAnswer] = useState('');
  const [LongAnswer, setLongAnswer] = useState('');
  const [Address, setAddress] = useState('')
 
 
  
  
  useEffect(() => {
    if (!data && props.startPress){
    
    setLatAnswer(props.Coor[0]);
    setLongAnswer(props.Coor[1]);
    
  
 
      fetch(` https://nominatim.openstreetmap.org/reverse.php?lat=${LatAnswer}&lon=${LongAnswer}&zoom=18&format=jsonv2`)
        .then((res) => res.json())
        .then((jsonObj) => {
          // props.setStartPress(false)
          setAddress(jsonObj.address)})
          // if (jsonObj.address.county){
          // props.setCounty(jsonObj.address.county);
          // console.log(`County is ${jsonObj.address.county}`)
          // }
          // if (jsonObj.address.city) {
          //    props.setCity(jsonObj.address.city);
          //    console.log(`city is ${jsonObj.address.city}`)
          //   } else if(jsonObj.address.village) {
          //     props.setCity(jsonObj.address.village);
          //     console.log(`village is ${jsonObj.address.village}`)
          // }
      // console.log("Address ",Address)
      // if (jsonObj.address.county){
        //   props.setCounty(jsonObj.address.county);
        //   console.log(`County is ${jsonObj.address.county}`)
        //   }
        //   if (jsonObj.address.city) {
          //      props.setCity(jsonObj.address.city);
          //      console.log(`city is ${jsonObj.address.city}`)
          //     } else if(jsonObj.address.village) {
        //       props.setCity(jsonObj.address.village);
        //       console.log(`village is ${jsonObj.address.village}`)
        //   }
        
      }
      
      // console.log("Address 2",Address)
  });
  return (null)
}
export default Answer;

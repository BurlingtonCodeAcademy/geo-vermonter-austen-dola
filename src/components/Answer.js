function Answer(props) {
    // Input props: Longitude Latitude start press
     //Output city and county
      const data = ""
      const [county, setCounty] = useState ("")
      const [city, setCity] = useState ("")
  
      useEffect(() => {
        if(!data && props.StartPress)
      fetch(
        `https://nominatim.openstreetmap.org/reverse.php?lat=${rndLat}&lon=${rndLong}`,
        
      )
        .then((res) => res.json())
        .then((jsonObj)=>{
          setCounty(jsonObj.address.county)
          if(jsonObj.address.city){
          setCity(jsonObj.address.city)
          }else{
          setCity(jsonObj.address.village)
          }
      });
    })
     
       
  }
  export default Answer
// this is the page for the answer function
//imports
import { useState } from "react";
import { useEffect } from "react";
import StartButton from "./Start";

function Answer(props) {
  // Input props: Longitude Latitude start press
  //Output city and county
  const data = "";
  const [LatAnswer, setLatAnswer] = useState("");
  const [LongAnswer, setLongAnswer] = useState("");
  const [Address, setAddress] = useState("");

  useEffect(() => {
    if (!data && props.startPress) {
      setLatAnswer(props.Coor[0]);
      setLongAnswer(props.Coor[1]);

      fetch(
        ` https://nominatim.openstreetmap.org/reverse.php?lat=${LatAnswer}&lon=${LongAnswer}&zoom=18&format=jsonv2`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          setAddress(jsonObj.address);
        });
    }
  });
  return null;
}
export default Answer;

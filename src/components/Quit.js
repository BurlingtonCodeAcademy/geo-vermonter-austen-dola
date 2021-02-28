// returns to the state map
// reset score
//remove any choice
// Display the answer (Town, County, Longitude, and Latitude)
import { useState } from "react";
function Quit() {
  // alert(<Info/>)
  return (
    <div>
      <button id = "Quit" onClick={() => window.location.reload(false)}>Quit</button>
    </div>
  );
  function Alert(props) {
    const [display, setDisplay] = useState(false);
    let clickMe = display;

    setDisplay(!clickMe);
    return (
      <div style={{ height: "250px", width: "100%", background: "yellow" }}>
        <h1>Hello!! I am MODAL!</h1>
        <button
          onClick={(evt) => {
            setDisplay(true);
          }}
        >
          Close
        </button>
      </div>
    );
  }
}

export default Quit;
